import type { FindReportQuery, FindReportQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindReportQuery($id: Int!) {
    report: report(id: $id) {
      id
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindReportQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  report,
}: CellSuccessProps<FindReportQuery, FindReportQueryVariables>) => {
  return <div>{JSON.stringify(report)}</div>
}
