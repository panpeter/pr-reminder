export interface User {
  login: string
}

export interface PullRequest {
  number: number
  title: string
  html_url: string
  requested_reviewers: User[]
}

export interface GraphQlPullRequestResponse {
  repository: {
    pullRequest: {
      timelineItems: {
        nodes: GraphQlNode[]
      }
      reviews: {
        nodes: GraphQlNode[]
      }
    }
  }
}

export interface GraphQlNode {
  __typename: string
  createdAt: string
}
