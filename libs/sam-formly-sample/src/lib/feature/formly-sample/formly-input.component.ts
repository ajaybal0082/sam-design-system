import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { SampleAutocompleteData } from './services/autocomplete-sample.data';


@Component({
  selector: 'formly-input',
  templateUrl: './formly-input.component.html',
  styleUrls: ['./formly-input.component.scss'],
  providers: [AutocompleteSampleDataService]
})
export class FormlyInputComponent implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  public settings = new SDSAutocompletelConfiguration();
  public settings1 = new SDSAutocompletelConfiguration();
  public settings2 = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  public autocompleteModel1 = new SDSSelectedItemModel();
  public autocompleteModel2 = new SDSSelectedItemModel();

  public settings3 = new SDSAutocompletelConfiguration();
  public autocompleteModel3 = new SDSSelectedItemModel();


  private data = SampleAutocompleteData;
  
  public filterChange$ = new BehaviorSubject<object>(null);
  fields: FormlyFieldConfig[] = [

    {
      key: 'filters',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'firstName',
        type: 'autocomplete',
        templateOptions: {
          label: 'Auto Complete',
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel,
          modelChange: this.changes,
         
        },
      }]
    },
    {
      key: 'filters',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Search' },
      fieldGroup: [
        {
          key: 'level2',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with single',
            service: this.service,
            configuration: this.settings1,
            model: this.autocompleteModel1,
            modelChange: this.changes
          },
        },
     

        {
          key: 'level2',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with multiselect',
            service: this.service,
            configuration: this.settings2,
            model: this.autocompleteModel2,
            modelChange: this.changes
          },
        },

        {
          key: 'level3',
          type: 'autocomplete',
          templateOptions: {
            label: 'Auto Complete with disable with pre populated value',
            service: this.service,
            configuration: this.settings3,
            model: this.autocompleteModel3,
            modelChange: this.changes,
            disabled: true

           
          },
        }
      ]
    }
  ];


  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.debounceTime = 0;


    this.settings1.id = 'autocomplete1';
    this.settings1.primaryKeyField = 'id';
    this.settings1.primaryTextField = 'name';
    this.settings1.secondaryTextField = 'subtext';
    this.settings1.labelText = 'Autocomplete 1';
    this.settings1.selectionMode = SelectionMode.SINGLE;
    this.settings1.autocompletePlaceHolderText = 'Enter text';
    this.settings1.debounceTime = 0;

    this.settings2.id = 'autocomplete1';
    this.settings2.primaryKeyField = 'id';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.labelText = 'Autocomplete 1';
    this.settings2.selectionMode = SelectionMode.MULTIPLE;
    this.settings2.autocompletePlaceHolderText = 'Enter text';
    this.settings2.debounceTime = 0;


    this.settings3.id = 'autocomplete1';
    this.settings3.primaryKeyField = 'id';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.labelText = 'Autocomplete 1';
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = 'Enter text';
    this.settings3.debounceTime = 0;


    this.autocompleteModel3.items.push(this.data[0]);
  }

  // To display the selected model values
  public ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
    );
  }


}
