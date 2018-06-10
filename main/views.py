from datetime import datetime

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail

from .forms import MessageForm
from .models import Message

# Create your views here.
def lets_encrypt(request):
    return HttpResponse('jjSzgCYyp_mF37teGk9kpk_ieQgOdXujkAPR-s0YeUY.zzdPXFw8kv_VxVurJVYAgN9kz0XrJg_kd0Uut6DdXwU')

def lets_encrypt_2(request):
    return HttpResponse('tGSRpMQ_x1ZmSTKsOypvLq_0n7Jgp2dh3jeayY-SuBI.zzdPXFw8kv_VxVurJVYAgN9kz0XrJg_kd0Uut6DdXwU')

def index(request):
    return render(request, 'main/index.html')

def services(request):
    return render(request, 'main/services.html')

def contact(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            m = Message(
                sender_name=data['sender_name'],
                sender_email=data['sender_email'],
                message=data['message'],
                time=datetime.now()
            )
            if m.sender_name != '' \
            and m.sender_email != '' \
            and m.message != '':
                m.save()

                # Email arguments
                subject = 'Message on Holmes Web Development from %s' % (m.sender_name)

                intro = (
                '''
                Sent: %s

                From: %s

                Email: %s \n\n
                ''' % (m.time, m.sender_name, m.sender_email))

                content = m.message

                try:
                    send_mail(
                        subject,
                        (intro + content),
                        'jar3dh0lm3s@gmail.com',
                        ['jared@colgro.com'],
                        fail_silently=False
                )
                except:
                    return render(request, 'main/contact-failed.html', context = { 'form' : form })
                return render(request, 'main/contact-thanks.html', context = { 'form' : form })

    else: form = MessageForm()

    return render(request, 'main/contact.html', context = { 'form' : form })
