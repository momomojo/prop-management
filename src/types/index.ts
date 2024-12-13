export interface User {
  id: string;
  email: string;
  role: 'admin' | 'manager' | 'tenant';
  name: string;
  avatar?: string;
}

export interface Property {
  id: string;
  name: string;
  address: string;
  units: number;
  imageUrl: string;
  managerId: string;
}

export interface Unit {
  id: string;
  propertyId: string;
  number: string;
  type: string;
  rent: number;
  status: 'vacant' | 'occupied';
  tenantId?: string;
}

export interface MaintenanceRequest {
  id: string;
  unitId: string;
  tenantId: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  unitId: string;
  tenantId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: Date;
  type: 'rent' | 'deposit' | 'fee';
}