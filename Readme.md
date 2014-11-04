# LBC - Web interface to manage leboncoin.fr classified ads

Manage all your leboncoin.fr classified ads in one website. Here's a list of features:

- Auto remove / publish ads every morning
- Create ads like leboncoin.fr website
- Create users

This website use the lbc_api Ruby API wrapper, available here:
[https://github.com/sweetdub/lbc_api](https://github.com/sweetdub/lbc_api)

## Installation

    gem bundle install
    rails rake db:migrate
    rails server

## Configuration

You have to change settings under `/config/settings/*.yml` to define those two settings:

	encrypt_key: MY_DEV_KEY # => Used to store user ads password
	email_domain: test.fr # => Base domain of generated email per ad


## Mailgun

The message controller is plugged with [mailgun route features](http://documentation.mailgun.com/quickstart-receiving.html#inbound-routes-and-parsing). You have to set a route like this one:

	match_recipient("^lbc-(.*)@MYDOMAIN.com") forward("http://MYDOMAIN/messages/\1")

## Informations

This is a alpha web site. No errors will be send to user.

