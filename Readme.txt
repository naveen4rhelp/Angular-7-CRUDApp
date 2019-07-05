ng new CRUDApp
no routing
css
ng g c employees
ng g c employees/employee
ng g c employees/employee-list
ng g s shared/employee
ng g cl shared/employee --type=model
modify index page
modify app.component.html
modify employees compnent
modify employee in employees
add changes in employee service
inject employee service in app module providers
design a form in employee component
#FullName="ngModel" [(ngModel)]="service.formData.FullName" name="FullName"
include Froms module in app module