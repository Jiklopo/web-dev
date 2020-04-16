from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework import status


@api_view(['GET', 'POST'])
def companies(request):
    if request.method == 'GET':
        ser = CompanySerializer(Company.objects.all(), many=True)
        return Response(ser.data)
    elif request.method == 'POST':
        ser = CompanySerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response(dict(error=str(ser.error_messages)))


@api_view(['GET', 'PUT', 'DELETE'])
def company(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(dict(error=str(e)), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    if request.method == 'GET':
        serializer = CompanySerializer(c)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=c, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        c.delete()
        return Response(dict(deleted=True))


@api_view(["GET"])
def company_vacancies(request, company_id):
    try:
        comp = Company.objects.get(id=company_id)
        serializer = VacancySerializer(
            [v.to_json() for v in Vacancy.objects.filter(company=comp)],
            many=True
        )
        return Response(serializer.data)
    except Exception as e:
        return Response(dict(error=str(e)))


class VacanciesView(APIView):
    def get(self, request):
        serializer = VacancySerializer(Vacancy.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class VacancyView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(id=vacancy_id)
        except Exception as e:
            return Response(dict(error=str(e)))

    def get(self, request, vacancy_id):
        v = self.get_object(vacancy_id)
        serializer = VacancySerializer(v)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        v = self.get_object(vacancy_id)
        serializer = VacancySerializer(v, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error_messages, status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        v = self.get_object(vacancy_id)
        v.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class VacancyTopTenView(APIView):
    def get(self, request):
        serializer = VacancySerializer(
            [v.to_json() for v in Vacancy.objects.order_by('-salary', 'name')[:10]],
            many=True
        )
        return Response(serializer.data)
