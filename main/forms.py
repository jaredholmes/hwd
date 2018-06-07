from django import forms

class MessageForm(forms.Form):
    sender_name = forms.CharField(label='Name ', max_length=50)
    sender_email = forms.EmailField(label='Email address ')
    message = forms.CharField(label='Your message ', widget=forms.Textarea(attrs={'class': 'materialize-textarea'}))
