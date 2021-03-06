# Generated by Django 3.1.6 on 2021-02-04 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20210204_1113'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('selling_price', models.FloatField()),
                ('discount_price', models.FloatField()),
                ('description', models.TextField()),
                ('brand', models.CharField(max_length=100)),
                ('catagory', models.CharField(choices=[('M', 'Mobile'), ('L', 'Laptop'), ('TW', 'Top wear'), ('BW', 'Bottom Wear')], max_length=2)),
                ('product_image', models.ImageField(upload_to='img')),
            ],
        ),
    ]
