import { NgModule } from '@angular/core'
import {
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material'

export const materialModules = [
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
