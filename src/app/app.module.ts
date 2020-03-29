import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import { DataStore } from '@aws-amplify/datastore';
import Amplify from '@aws-amplify/core';
import awsConfig from 'src/aws-exports';
Amplify.configure(awsConfig);

@NgModule({
	declarations: [AppComponent, ProductsComponent, HeaderComponent, NewProductComponent, FormComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule, AmplifyAngularModule],
	providers: [
		{
			provide: AmplifyService,
			useFactory: () => {
				return AmplifyModules({
					DataStore
				});
			}
		}
	],
	bootstrap: [AppComponent],
	entryComponents: [NewProductComponent, FormComponent]
})
export class AppModule {}
