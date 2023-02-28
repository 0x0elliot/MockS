# Generated by Django 3.2.12 on 2023-02-28 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='mockedResponses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mockJSON', models.JSONField(max_length=100)),
                ('mockLocation', models.CharField(max_length=100, unique=True)),
            ],
        ),
    ]