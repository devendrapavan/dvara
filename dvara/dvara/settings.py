from dvara.base import *

DEBUG = True

ALLOWED_HOSTS = [ '*' ]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dvara',
        'USER':'root',
        'PASSWORD':'Pavan1214',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

CORS_ORIGIN_ALLOW_ALL = True