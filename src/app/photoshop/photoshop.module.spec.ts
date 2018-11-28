import { PhotoshopModule } from './photoshop.module';

describe('PhotoshopModule', () => {
  let photoshopModule: PhotoshopModule;

  beforeEach(() => {
    photoshopModule = new PhotoshopModule();
  });

  it('should create an instance', () => {
    expect(photoshopModule).toBeTruthy();
  });
});
