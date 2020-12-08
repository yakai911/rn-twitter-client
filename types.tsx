export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
  NewTweet: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Search: undefined
  Notifications: undefined
  Messages: undefined
}

export type HomeParamList = {
  HomeScreen: undefined
}

export type SearchParamList = {
  SearchScreen: undefined
}

export type NotificationsParamList = {
  NotificationsScreen: undefined
}

export type MessagesParamList = {
  MessagesScreen: undefined
}

export type UserType = {
  id: string
  name: string
  username: string
  image?: string
}

export type TweetType = {
  id: string
  createdAt: string
  user: UserType
  content: string
  image?: string
  numberOfComments?: number
  numberOfLikes?: number
  numberOfRetweets?: number
}
