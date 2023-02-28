import click
import requests

BASE_URL_DEFAULT = 'http://127.0.0.1:8000'

@click.group()
@click.option('--base-url', default=BASE_URL_DEFAULT, help='The base URL for the API')
@click.pass_context
def cli(ctx, base_url):
    """Main entry point for the CLI"""
    ctx.obj = {'base_url': base_url}

@click.command()
@click.option('--mockjson', type=str, help='The JSON to send in the POST request')
@click.option('--mocklocation', type=str, help='The location to send in the POST request')
@click.pass_context
def create_mock(ctx, mockjson, mocklocation):
    """Send a POST request to create a mock"""
    base_url = ctx.obj['base_url']
    url = f'{base_url}/api/mock/create/'
    data = {'mockJSON': mockjson, 'mockLocation': mocklocation}
    response = requests.post(url, data=data)

    if response.status_code == 201:
        click.echo('Mock created successfully')
    else:
        print(response.json())
        click.echo('Failed to create mock')


@click.command()
@click.option('--mocklocation', type=str, help='The location to retrieve the mock from')
@click.pass_context
def get_mock(ctx, mocklocation):
    """Send a GET request to retrieve a mock"""
    base_url = ctx.obj['base_url']
    url = f'{base_url}/api/mock/{mocklocation}'
    response = requests.get(url)

    if response.status_code == 200:
        mock_data = response.json()
        click.echo(f'Retrieved mock for {mocklocation}: {mock_data}')
    else:
        click.echo(f'Failed to retrieve mock for {mocklocation}')

cli.add_command(create_mock)
cli.add_command(get_mock)

if __name__ == "__main__":
    cli()
