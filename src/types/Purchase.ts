export interface NewPurchaseData {
  userId: number;
  name: string;
  last_name: string;
  document: string;
  shopping_card: ShoppingCard;
}

export interface PurchaseData {
  id: number;
  userId: number;
  name: string;
  last_name: string;
  document: string;
  shopping_card: ShoppingCard;
}

export interface ShoppingCard {
  name: string;
  cvv: number;
  number_card: string;
  type: string;
}
