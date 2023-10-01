import { ToasterService } from './toaster.service';
import { ToastType } from './types/Toast';

describe('ToasterService', () => {
  let service: ToasterService;

  beforeEach(() => {
    service = new ToasterService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
  it('should add a toast to the activeToasts$ observable', () => {
    const title = 'Test Title';
    const body = 'Test Body';
    const type = ToastType.SUCCESS;
    const activeMilliseconds = 5000;

    service.pop(title, body, type, activeMilliseconds);

    service.activeToasts$.subscribe(toasts => {
      expect(toasts.length).toBe(1);
      expect(toasts[0].title).toBe(title);
      expect(toasts[0].body).toBe(body);
      expect(toasts[0].type).toBe(type);
      expect(toasts[0].expiry.getTime()).toBeGreaterThan(new Date().getTime());
    });
  });
});
