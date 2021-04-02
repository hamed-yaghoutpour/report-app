Vue.component("login-page",{
	template:
	`
	<div id="login_part">
		<div class="profile_image"></div>
		<h1 class="fa title">خوش آمدید</h1>
		<h5 class="fa">رمز پیشفرض شما "password" می باشد.</h5>
		<input placeholder="نام کاربری" id="username_input">
		<input placeholder="رمز عبور" id="login_input">
		<button id="login_button">login</button>
	</div>
	`
})
