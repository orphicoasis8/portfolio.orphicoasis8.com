import { MayaModule } from './maya.module';

describe('MayaModule', () => {
  let mayaModule: MayaModule;

  beforeEach(() => {
    mayaModule = new MayaModule();
  });

  it('should create an instance', () => {
    expect(mayaModule).toBeTruthy();
  });
});
