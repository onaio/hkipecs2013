import os
import sys

from fabric.api import cd, env, run, sudo, put
from fabric.contrib import files

DEPLOYMENTS = {
    'prod': {
        'home': '/var/www',
        'host_string': 'ubuntu@hkipecs.onalabs.org',
        'project': 'hkipecs2013',
        'repo': 'git@github.com:onaio/hkipecs2013.git',
        'key_filename': [
            os.path.expanduser('~/.ssh/ona.pem'),
            os.path.expanduser('~/.ssh/id_rsa'),
        ],
    },
}


def check_key_filename(deployment_name):
    if 'key_filename' in DEPLOYMENTS[deployment_name]:
        key_files = []
        for path in DEPLOYMENTS[deployment_name]['key_filename']:
            if os.path.exists(path):
                key_files.append(path)

        if not key_files.__len__():
            exit_with_error("Cannot find required permissions file: %s" %
                            DEPLOYMENTS[deployment_name]['key_filename'])
        else:
            return key_files


def exit_with_error(message):
    print(message)
    sys.exit(1)


def setup_env(deployment_name, project):
    deployment = DEPLOYMENTS.get(deployment_name)

    if deployment is None:
        exit_with_error('Deployment "%s" not found.' % deployment_name)

    env.update(deployment)

    key_files = check_key_filename(deployment_name)
    env.update({'key_filename': key_files})
    env.update({'project': project})
    env.code_src = os.path.join(env.home, env.project)

    env.nginx_conf = os.path.join('context', 'etc', 'nginx', 'sites-available',
                                  'nginx.conf')


def setup_server(deployment_name, project='hkipecs2013', branch='master'):
    setup_env(deployment_name, project)

    with cd(env.home):
        run('git clone %(repo)s %(project)s' % env)

    with cd(env.code_src):
        run('git checkout origin/%s' % branch)

    nginx_conf = '/etc/nginx/sites-available/%s' % env.project
    put(env.nginx_conf, nginx_conf, use_sudo=True)
    if files.exists(nginx_conf):
        files.sed(nginx_conf, 'PROJECT', env.project,
                  use_sudo=True, backup='')
    sudo('ln -s /etc/nginx/sites-available/%s /etc/nginx/sites-enabled/%s'
         % (env.project, env.project))
    sudo('nginx -s reload')


def deploy(deployment_name, project='hkipecs2013', branch='master'):
    setup_env(deployment_name, project)
    with cd(env.code_src):
        run("git fetch origin")
        run("git checkout origin/%s" % branch)
    sudo('nginx -s reload')
