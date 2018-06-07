# TODO: Change settings back for production
# TODO: Instead of thank you, redirect to special thank you home page
from datetime import datetime

from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail

from .forms import MessageForm
from .models import Message

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
                return HttpResponse('Unfortunately there was an error. Please retry. If you continue to see this message, please send the message via email instead.')
            return HttpResponse('Thank you for your message.')

    else: form = MessageForm()

    return render(request, 'main/contact.html', context = { 'form' : form })
