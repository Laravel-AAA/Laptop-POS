@component('mail::message')
# You are invited to join **{{$owner->business->name}}**!

Hello {{$account->name}},

**{{$owner->name}}** have created an account for you in **{{$owner->business->name}}** business. And you are receiving this email to activate your account.

@component('mail::button',['url'=>$verificationUrl])
        Activate & Verify email
@endcomponent

Or you can login with your email: **{{$account->email}}**, at [Laptop POS]({{env('APP_URL')}}/login).


If you think this email is sent to you by mistake, you can ignore it and no further action is required.

Thanks,<br>
Laptop POS
@endcomponent