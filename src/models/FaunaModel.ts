export enum FaunaCollections {
  Subscriptions = 'subscriptions',
  Users = 'users',
}

export enum FaunaIndexes {
  UserByEmail = 'user_by_email',
  UserByStripeCustomerId = 'user_by_stripe_customer_id',
  SubscriptionById = 'subscription_by_id',
  SubscriptionByUserRef = 'subscription_by_user_ref',
  SubscriptionByStatus = 'subscription_by_status',
}
