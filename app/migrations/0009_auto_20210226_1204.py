# Generated by Django 3.1.6 on 2021-02-26 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20210207_0855'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderplaced',
            name='status',
            field=models.CharField(choices=[('Accepted', 'Accepted'), ('Packed', 'Packed'), ('On the way', 'On the way'), ('Delivered', 'Delivered'), ('Cancel', 'Cancel')], default='pending', max_length=50),
        ),
    ]
