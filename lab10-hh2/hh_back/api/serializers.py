from rest_framework import serializers

from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=500)
    city = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=100)

    def create(self, validated_data):
        company = Company.objects.create(
            name=validated_data.get('name'),
            description=validated_data.get('description'),
            city=validated_data.get('city'),
            address=validated_data.get('address')
        )
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'company', 'name', 'description', 'salary']
