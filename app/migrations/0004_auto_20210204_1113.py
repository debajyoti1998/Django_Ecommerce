# Generated by Django 3.1.6 on 2021-02-04 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20210204_1109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='costomar',
            name='state',
            field=models.CharField(choices=[(' west bengal', 'west bengal'), ('assam', 'assam'), ('bihar', 'bihar'), ('orisha', 'orisha')], max_length=50),
        ),
    ]