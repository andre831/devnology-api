export interface ResumeShop {
  id: number;
  userId: number;
  localId: number;
  purchaseId: number;
  items: string;
  total: string;
}

export interface NewResumeShop {
  userId: number;
  localId: number;
  purchaseId: number;
  items: string;
  total: string;
}
