/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.
     */
    email<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "EmailAddress";
    /**
     * A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
     */
    phone<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "PhoneNumber";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.
     */
    email<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "EmailAddress";
    /**
     * A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
     */
    phone<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "PhoneNumber";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  expenseInput: { // input type
    amount?: number | null; // Float
    expense?: string | null; // String
    mod?: string | null; // String
    payDate?: NexusGenScalars['Date'] | null; // Date
  }
  itemInput: { // input type
    dosage?: string | null; // String
    expiredDate?: NexusGenScalars['Date'] | null; // Date
    items?: string | null; // String
    price?: number | null; // Float
    quantity?: number | null; // Int
  }
  orderInput: { // input type
    itemsID?: string | null; // ID
    quantity?: number | null; // Int
    total?: number | null; // Float
  }
  userInput: { // input type
    birthday?: NexusGenScalars['Date'] | null; // Date
    email?: NexusGenScalars['EmailAddress'] | null; // EmailAddress
    firstname?: string | null; // String
    lastname?: string | null; // String
    phone?: NexusGenScalars['PhoneNumber'] | null; // PhoneNumber
    salary?: number | null; // Float
  }
}

export interface NexusGenEnums {
  role: "admin" | "manager" | "staff"
  tab: "category" | "expFolder" | "item" | "user"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
  DateTime: any
  EmailAddress: any
  PhoneNumber: any
}

export interface NexusGenObjects {
  Mutation: {};
  OrderTotal: { // root type
    date?: string | null; // String
    total?: number | null; // Int
  }
  Query: {};
  Subscription: {};
  archive: { // root type
    archive?: boolean | null; // Boolean
    archiveID?: string | null; // ID
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  category: { // root type
    category?: string | null; // String
    categoryID?: string | null; // ID
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  expenseFolder: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    exFolder?: string | null; // String
    expFolderID?: string | null; // ID
  }
  expenses: { // root type
    amount?: number | null; // Float
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    expense?: string | null; // String
    expenseID?: string | null; // ID
    mod?: string | null; // String
    payDate?: NexusGenScalars['Date'] | null; // Date
  }
  item: { // root type
    dosage?: string | null; // String
    items?: string | null; // String
    itemsID?: string | null; // ID
  }
  logs: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    descriptions?: string | null; // String
    logs?: string | null; // String
    logsID?: string | null; // ID
  }
  notification: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    notifStatus?: string | null; // String
    notification?: string | null; // String
    notificationID?: string | null; // ID
  }
  order: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    order?: string | null; // String
    orderID?: string | null; // ID
    total?: number | null; // Float
  }
  orderCart: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    orderListItemID?: string | null; // ID
    quantity?: number | null; // Int
    total?: number | null; // Float
  }
  profile: { // root type
    birthday?: NexusGenScalars['Date'] | null; // Date
    firstname?: string | null; // String
    lastname?: string | null; // String
    phone?: NexusGenScalars['PhoneNumber'] | null; // PhoneNumber
    profileID?: string | null; // ID
  }
  salary: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    salary?: number | null; // Float
    salaryID?: string | null; // ID
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  store: { // root type
    expiredDate?: NexusGenScalars['Date'] | null; // Date
    price?: number | null; // Float
    quantity?: number | null; // Int
    storeInfoID?: string | null; // ID
  }
  token: { // root type
    token?: string | null; // String
  }
  user: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: NexusGenScalars['EmailAddress'] | null; // EmailAddress
    password?: string | null; // String
    role?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    userID?: string | null; // ID
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createAnOrder: NexusGenRootTypes['order'] | null; // order
    createCategory: NexusGenRootTypes['category'] | null; // category
    createCategoryArchive: NexusGenRootTypes['archive'] | null; // archive
    createExpense: NexusGenRootTypes['expenses'] | null; // expenses
    createExpenseFolder: NexusGenRootTypes['expenseFolder'] | null; // expenseFolder
    createExpenseFolderArchive: NexusGenRootTypes['archive'] | null; // archive
    createItemArchive: NexusGenRootTypes['archive'] | null; // archive
    createMedicalItems: NexusGenRootTypes['item'] | null; // item
    createNotificationSystem: NexusGenRootTypes['notification'] | null; // notification
    createUserAccount: NexusGenRootTypes['user'] | null; // user
    createUserArchive: NexusGenRootTypes['archive'] | null; // archive
    deleteCategory: NexusGenRootTypes['category'] | null; // category
    deleteExpFolder: NexusGenRootTypes['expenseFolder'] | null; // expenseFolder
    deleteExpense: Array<NexusGenRootTypes['expenses'] | null> | null; // [expenses]
    deleteMedicalItem: NexusGenRootTypes['item'] | null; // item
    deleteUserAccount: NexusGenRootTypes['user'] | null; // user
    generateOrderReport: Array<NexusGenRootTypes['order'] | null> | null; // [order]
    login: NexusGenRootTypes['token'] | null; // token
    resetUserPasswordToDefault: NexusGenRootTypes['user'] | null; // user
    updateArchive: NexusGenRootTypes['archive'] | null; // archive
    updateCategory: NexusGenRootTypes['category'] | null; // category
    updateExpense: NexusGenRootTypes['expenses'] | null; // expenses
    updateExpenseFolder: NexusGenRootTypes['expenseFolder'] | null; // expenseFolder
    updateMedicalitems: NexusGenRootTypes['item'] | null; // item
    updateNotificationSystem: NexusGenRootTypes['notification'] | null; // notification
    updateUserAccounts: NexusGenRootTypes['user'] | null; // user
    updateUserEmailAddress: NexusGenRootTypes['user'] | null; // user
    updateUserPassword: NexusGenRootTypes['user'] | null; // user
    updateUserProfile: NexusGenRootTypes['profile'] | null; // profile
  }
  OrderTotal: { // field return type
    date: string | null; // String
    total: number | null; // Int
  }
  Query: { // field return type
    getAllArchiveByTab: Array<NexusGenRootTypes['archive'] | null> | null; // [archive]
    getAllCategory: Array<NexusGenRootTypes['category'] | null> | null; // [category]
    getAllExpense: Array<NexusGenRootTypes['expenses'] | null> | null; // [expenses]
    getAllExpenseByGroup: Array<NexusGenRootTypes['expenses'] | null> | null; // [expenses]
    getAllExpenseFolder: Array<NexusGenRootTypes['expenseFolder'] | null> | null; // [expenseFolder]
    getAllNotification: Array<NexusGenRootTypes['notification'] | null> | null; // [notification]
    getAllOrderHistory: Array<NexusGenRootTypes['OrderTotal'] | null> | null; // [OrderTotal]
    getAllOrders: Array<NexusGenRootTypes['order'] | null> | null; // [order]
    getAllStoreItems: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    getAllUnreadNotification: Array<NexusGenRootTypes['notification'] | null> | null; // [notification]
    getAllUserAccount: Array<NexusGenRootTypes['user'] | null> | null; // [user]
    getAllUserAccountManagerRole: Array<NexusGenRootTypes['user'] | null> | null; // [user]
    getCategotiesById: Array<NexusGenRootTypes['category'] | null> | null; // [category]
    getCurrentOrdersBy20: Array<NexusGenRootTypes['order'] | null> | null; // [order]
    getExpenseFolderById: Array<NexusGenRootTypes['expenseFolder'] | null> | null; // [expenseFolder]
    getItemBySearch: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    getItemsByCategoryId: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    getItemsById: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    getItemsByStaff: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    getLogByUserId: Array<NexusGenRootTypes['logs'] | null> | null; // [logs]
    getOrderById: Array<NexusGenRootTypes['order'] | null> | null; // [order]
    getProfileByUserId: Array<NexusGenRootTypes['profile'] | null> | null; // [profile]
    getSearchByFolderName: Array<NexusGenRootTypes['expenseFolder'] | null> | null; // [expenseFolder]
    getSearchByUser: Array<NexusGenRootTypes['user'] | null> | null; // [user]
    getSearchCategory: Array<NexusGenRootTypes['category'] | null> | null; // [category]
    getTotalNoOfItems: number | null; // Int
    getTotalNoOfOrders: number | null; // Int
    getTotalRevenue: number | null; // Float
    getUserById: Array<NexusGenRootTypes['user'] | null> | null; // [user]
  }
  Subscription: { // field return type
    archiveSubscriptions: NexusGenRootTypes['archive'] | null; // archive
    categorySubscriptions: NexusGenRootTypes['category'] | null; // category
    createItemSubscriptions: NexusGenRootTypes['item'] | null; // item
    createOrders: NexusGenRootTypes['order'] | null; // order
    createUserSubscriptions: NexusGenRootTypes['user'] | null; // user
    expenseFolderSubscriptions: NexusGenRootTypes['expenseFolder'] | null; // expenseFolder
    expensesSubscriptions: NexusGenRootTypes['expenses'] | null; // expenses
  }
  archive: { // field return type
    archive: boolean | null; // Boolean
    archiveID: string | null; // ID
    categories: Array<NexusGenRootTypes['category'] | null> | null; // [category]
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    expenseFolder: Array<NexusGenRootTypes['expenseFolder'] | null> | null; // [expenseFolder]
    items: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    user: Array<NexusGenRootTypes['user'] | null> | null; // [user]
  }
  category: { // field return type
    category: string | null; // String
    categoryID: string | null; // ID
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    items: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    totalNumberOfItems: number | null; // Int
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  expenseFolder: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    exFolder: string | null; // String
    expFolderID: string | null; // ID
    expenseAmount: number | null; // Int
    getAllExpenses: Array<NexusGenRootTypes['expenses'] | null> | null; // [expenses]
  }
  expenses: { // field return type
    amount: number | null; // Float
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    expense: string | null; // String
    expenseID: string | null; // ID
    mod: string | null; // String
    payDate: NexusGenScalars['Date'] | null; // Date
  }
  item: { // field return type
    category: Array<NexusGenRootTypes['category'] | null> | null; // [category]
    dosage: string | null; // String
    items: string | null; // String
    itemsID: string | null; // ID
    storeInfo: Array<NexusGenRootTypes['store'] | null> | null; // [store]
  }
  logs: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    descriptions: string | null; // String
    logs: string | null; // String
    logsID: string | null; // ID
  }
  notification: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    notifStatus: string | null; // String
    notification: string | null; // String
    notificationID: string | null; // ID
  }
  order: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    itemCount: number | null; // Int
    order: string | null; // String
    orderCart: Array<NexusGenRootTypes['orderCart'] | null> | null; // [orderCart]
    orderID: string | null; // ID
    total: number | null; // Float
  }
  orderCart: { // field return type
    cartItem: Array<NexusGenRootTypes['item'] | null> | null; // [item]
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    orderListItemID: string | null; // ID
    quantity: number | null; // Int
    total: number | null; // Float
  }
  profile: { // field return type
    birthday: NexusGenScalars['Date'] | null; // Date
    firstname: string | null; // String
    fullname: string | null; // String
    lastname: string | null; // String
    myUser: Array<NexusGenRootTypes['user'] | null> | null; // [user]
    phone: NexusGenScalars['PhoneNumber'] | null; // PhoneNumber
    profileID: string | null; // ID
  }
  salary: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    salary: number | null; // Float
    salaryID: string | null; // ID
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  store: { // field return type
    expiredDate: NexusGenScalars['Date'] | null; // Date
    price: number | null; // Float
    quantity: number | null; // Int
    storeInfoID: string | null; // ID
  }
  token: { // field return type
    token: string | null; // String
  }
  user: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    email: NexusGenScalars['EmailAddress'] | null; // EmailAddress
    logs: Array<NexusGenRootTypes['logs'] | null> | null; // [logs]
    myProfile: Array<NexusGenRootTypes['profile'] | null> | null; // [profile]
    password: string | null; // String
    role: string | null; // String
    salary: Array<NexusGenRootTypes['salary'] | null> | null; // [salary]
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    userID: string | null; // ID
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createAnOrder: 'order'
    createCategory: 'category'
    createCategoryArchive: 'archive'
    createExpense: 'expenses'
    createExpenseFolder: 'expenseFolder'
    createExpenseFolderArchive: 'archive'
    createItemArchive: 'archive'
    createMedicalItems: 'item'
    createNotificationSystem: 'notification'
    createUserAccount: 'user'
    createUserArchive: 'archive'
    deleteCategory: 'category'
    deleteExpFolder: 'expenseFolder'
    deleteExpense: 'expenses'
    deleteMedicalItem: 'item'
    deleteUserAccount: 'user'
    generateOrderReport: 'order'
    login: 'token'
    resetUserPasswordToDefault: 'user'
    updateArchive: 'archive'
    updateCategory: 'category'
    updateExpense: 'expenses'
    updateExpenseFolder: 'expenseFolder'
    updateMedicalitems: 'item'
    updateNotificationSystem: 'notification'
    updateUserAccounts: 'user'
    updateUserEmailAddress: 'user'
    updateUserPassword: 'user'
    updateUserProfile: 'profile'
  }
  OrderTotal: { // field return type name
    date: 'String'
    total: 'Int'
  }
  Query: { // field return type name
    getAllArchiveByTab: 'archive'
    getAllCategory: 'category'
    getAllExpense: 'expenses'
    getAllExpenseByGroup: 'expenses'
    getAllExpenseFolder: 'expenseFolder'
    getAllNotification: 'notification'
    getAllOrderHistory: 'OrderTotal'
    getAllOrders: 'order'
    getAllStoreItems: 'item'
    getAllUnreadNotification: 'notification'
    getAllUserAccount: 'user'
    getAllUserAccountManagerRole: 'user'
    getCategotiesById: 'category'
    getCurrentOrdersBy20: 'order'
    getExpenseFolderById: 'expenseFolder'
    getItemBySearch: 'item'
    getItemsByCategoryId: 'item'
    getItemsById: 'item'
    getItemsByStaff: 'item'
    getLogByUserId: 'logs'
    getOrderById: 'order'
    getProfileByUserId: 'profile'
    getSearchByFolderName: 'expenseFolder'
    getSearchByUser: 'user'
    getSearchCategory: 'category'
    getTotalNoOfItems: 'Int'
    getTotalNoOfOrders: 'Int'
    getTotalRevenue: 'Float'
    getUserById: 'user'
  }
  Subscription: { // field return type name
    archiveSubscriptions: 'archive'
    categorySubscriptions: 'category'
    createItemSubscriptions: 'item'
    createOrders: 'order'
    createUserSubscriptions: 'user'
    expenseFolderSubscriptions: 'expenseFolder'
    expensesSubscriptions: 'expenses'
  }
  archive: { // field return type name
    archive: 'Boolean'
    archiveID: 'ID'
    categories: 'category'
    createdAt: 'DateTime'
    expenseFolder: 'expenseFolder'
    items: 'item'
    updatedAt: 'DateTime'
    user: 'user'
  }
  category: { // field return type name
    category: 'String'
    categoryID: 'ID'
    createdAt: 'DateTime'
    items: 'item'
    totalNumberOfItems: 'Int'
    updatedAt: 'DateTime'
  }
  expenseFolder: { // field return type name
    createdAt: 'DateTime'
    exFolder: 'String'
    expFolderID: 'ID'
    expenseAmount: 'Int'
    getAllExpenses: 'expenses'
  }
  expenses: { // field return type name
    amount: 'Float'
    createdAt: 'DateTime'
    expense: 'String'
    expenseID: 'ID'
    mod: 'String'
    payDate: 'Date'
  }
  item: { // field return type name
    category: 'category'
    dosage: 'String'
    items: 'String'
    itemsID: 'ID'
    storeInfo: 'store'
  }
  logs: { // field return type name
    createdAt: 'DateTime'
    descriptions: 'String'
    logs: 'String'
    logsID: 'ID'
  }
  notification: { // field return type name
    createdAt: 'DateTime'
    notifStatus: 'String'
    notification: 'String'
    notificationID: 'ID'
  }
  order: { // field return type name
    createdAt: 'DateTime'
    itemCount: 'Int'
    order: 'String'
    orderCart: 'orderCart'
    orderID: 'ID'
    total: 'Float'
  }
  orderCart: { // field return type name
    cartItem: 'item'
    createdAt: 'DateTime'
    orderListItemID: 'ID'
    quantity: 'Int'
    total: 'Float'
  }
  profile: { // field return type name
    birthday: 'Date'
    firstname: 'String'
    fullname: 'String'
    lastname: 'String'
    myUser: 'user'
    phone: 'PhoneNumber'
    profileID: 'ID'
  }
  salary: { // field return type name
    createdAt: 'DateTime'
    salary: 'Float'
    salaryID: 'ID'
    updatedAt: 'DateTime'
  }
  store: { // field return type name
    expiredDate: 'Date'
    price: 'Float'
    quantity: 'Int'
    storeInfoID: 'ID'
  }
  token: { // field return type name
    token: 'String'
  }
  user: { // field return type name
    createdAt: 'DateTime'
    email: 'EmailAddress'
    logs: 'logs'
    myProfile: 'profile'
    password: 'String'
    role: 'String'
    salary: 'salary'
    updatedAt: 'DateTime'
    userID: 'ID'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAnOrder: { // args
      orders?: Array<NexusGenInputs['orderInput'] | null> | null; // [orderInput]
    }
    createCategory: { // args
      category: string; // String!
      userID: string; // ID!
    }
    createCategoryArchive: { // args
      categoryID: string; // ID!
      userID: string; // ID!
    }
    createExpense: { // args
      expFolderID: string; // ID!
      expenses?: NexusGenInputs['expenseInput'] | null; // expenseInput
    }
    createExpenseFolder: { // args
      exFolder: string; // String!
      userID: string; // ID!
    }
    createExpenseFolderArchive: { // args
      expFolderID: string; // ID!
      userID: string; // ID!
    }
    createItemArchive: { // args
      itemsID: string; // ID!
      userID: string; // ID!
    }
    createMedicalItems: { // args
      categoryID: string; // ID!
      items?: NexusGenInputs['itemInput'] | null; // itemInput
      userID: string; // ID!
    }
    createUserAccount: { // args
      role: NexusGenEnums['role']; // role!
      user?: NexusGenInputs['userInput'] | null; // userInput
    }
    createUserArchive: { // args
      mainUser: string; // ID!
      userID: string; // ID!
    }
    deleteCategory: { // args
      categoryID: string; // ID!
      userID: string; // ID!
    }
    deleteExpFolder: { // args
      expFolderID: string; // ID!
      userID: string; // ID!
    }
    deleteExpense: { // args
      expenseID: Array<string | null>; // [ID]!
    }
    deleteMedicalItem: { // args
      itemsID: string; // ID!
      userID: string; // ID!
    }
    deleteUserAccount: { // args
      main: string; // ID!
      userID: string; // ID!
    }
    generateOrderReport: { // args
      endDate: string; // String!
      startDate: string; // String!
    }
    login: { // args
      email: NexusGenScalars['EmailAddress']; // EmailAddress!
      password: string; // String!
    }
    resetUserPasswordToDefault: { // args
      userID: string; // ID!
    }
    updateArchive: { // args
      archiveID: string; // ID!
      userID: string; // ID!
    }
    updateCategory: { // args
      category: string; // String!
      categoryID: string; // ID!
      userID: string; // ID!
    }
    updateExpense: { // args
      expenseID: string; // ID!
      expenses?: NexusGenInputs['expenseInput'] | null; // expenseInput
    }
    updateExpenseFolder: { // args
      exFolder: string; // String!
      expFolderID: string; // ID!
      userID: string; // ID!
    }
    updateMedicalitems: { // args
      items?: NexusGenInputs['itemInput'] | null; // itemInput
      itemsID: string; // ID!
      userID: string; // ID!
    }
    updateNotificationSystem: { // args
      notificationID: string; // ID!
    }
    updateUserAccounts: { // args
      user?: NexusGenInputs['userInput'] | null; // userInput
      userID: string; // ID!
    }
    updateUserEmailAddress: { // args
      email: NexusGenScalars['EmailAddress']; // EmailAddress!
      userID: string; // ID!
    }
    updateUserPassword: { // args
      currentPasword: string; // String!
      password: string; // String!
      retype: string; // String!
      userID: string; // ID!
    }
    updateUserProfile: { // args
      birthday: NexusGenScalars['Date']; // Date!
      firstname: string; // String!
      lastname: string; // String!
      phone: NexusGenScalars['PhoneNumber']; // PhoneNumber!
      userID: string; // ID!
    }
  }
  Query: {
    getAllArchiveByTab: { // args
      tab?: NexusGenEnums['tab'] | null; // tab
    }
    getAllExpense: { // args
      expFolderID: string; // ID!
    }
    getAllExpenseByGroup: { // args
      expFolderID: string; // ID!
    }
    getAllOrderHistory: { // args
      dmy: string; // String!
    }
    getCategotiesById: { // args
      categoryID: string; // ID!
    }
    getExpenseFolderById: { // args
      expFolderID: string; // ID!
    }
    getItemBySearch: { // args
      categoryID: string; // ID!
      search: string; // ID!
    }
    getItemsByCategoryId: { // args
      categoryID: string; // ID!
    }
    getItemsById: { // args
      itemsID: string; // ID!
    }
    getItemsByStaff: { // args
      search: string; // String!
    }
    getLogByUserId: { // args
      offset: number; // Int!
      orders: string; // String!
      take: number; // Int!
      userID: string; // ID!
    }
    getOrderById: { // args
      orderID: string; // ID!
    }
    getProfileByUserId: { // args
      userID: string; // ID!
    }
    getSearchByFolderName: { // args
      search: string; // String!
    }
    getSearchByUser: { // args
      search: string; // String!
    }
    getSearchCategory: { // args
      search: string; // String!
    }
    getUserById: { // args
      userID: string; // ID!
    }
  }
  Subscription: {
    archiveSubscriptions: { // args
      tab?: NexusGenEnums['tab'] | null; // tab
    }
    createItemSubscriptions: { // args
      categoryID: string; // ID!
    }
    expensesSubscriptions: { // args
      expFolderID: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}