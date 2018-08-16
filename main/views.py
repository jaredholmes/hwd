import os
import ssl
from datetime import datetime

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
# from django.core.mail import send_mail

import sendgrid
from sendgrid.helpers.mail import *

from .forms import MessageForm
from .models import Message

#ssl._create_default_https_context = ssl._create_unverified_context

# Create your views here.

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
                '''Sent: %s

From: %s

Email: %s \n\n
                ''' % (m.time, m.sender_name, m.sender_email))

                content = m.message

                # try:
                #     send_mail(
                #         subject,
                #         (intro + content),
                #         'jar3dh0lm3s@gmail.com',
                #         ['jared@colgro.com'],
                #         fail_silently=False
                # )
                # except:
                #     return render(request, 'main/contact-failed.html', context = { 'form' : form })
                # return render(request, 'main/contact-thanks.html', context = { 'form' : form })

                sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
                from_email = Email('jared@colgro.com')
                to_email = Email('jared@colgro.com')
                email_subject = subject
                email_content = Content('text/plain', intro + content)
                mail = Mail(from_email, email_subject, to_email, email_content)
                response = sg.client.mail.send.post(request_body=mail.get())

                if response.status_code == 202:
                    return render(request, 'main/contact-thanks.html', context = { 'form' : form })
                else:
                    return render(request, 'main/contact-thanks.html', context = { 'form' : form })

    else: form = MessageForm()

    return render(request, 'main/contact.html', context = { 'form' : form })
