import React from "react";

interface ApplicationAction {
  name: string;
  link: string;
  isExternal?: boolean;
}

export interface Application {
  id: string;
  icon: string;
  name: string;
  label?: string;
  actions: ApplicationAction[];
  component: React.FC<any>;
}
