import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})

export class ModelModule { }
// it define a feature module
// allow data model function (product repository) can be used everywhere in app
