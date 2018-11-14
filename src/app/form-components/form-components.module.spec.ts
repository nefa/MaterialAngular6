import { FormComponentsModule } from './form-components.module';

describe('FormComponentsModule', () => {
  let formComponentsModule: FormComponentsModule;

  beforeEach(() => {
    formComponentsModule = new FormComponentsModule();
  });

  it('should create an instance', () => {
    expect(formComponentsModule).toBeTruthy();
  });
});
