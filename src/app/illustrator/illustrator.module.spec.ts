import { IllustratorModule } from './illustrator.module';

describe('IllustratorModule', () => {
  let illustratorModule: IllustratorModule;

  beforeEach(() => {
    illustratorModule = new IllustratorModule();
  });

  it('should create an instance', () => {
    expect(illustratorModule).toBeTruthy();
  });
});
