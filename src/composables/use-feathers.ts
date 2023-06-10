import type { AnyData } from 'feathers-pinia'
import { type FeathersPiniaService } from 'feathers-pinia'
import { api } from '../feathers'

export const useFeathers = () => {
  return { api }
}

/**
 * Returns a type-casted service to work with Feathers-Pinia. It currently does not type custom methods.
 * @param servicePath the path of the service
 */
export const useFeathersService = <Result extends AnyData, Query extends AnyData>(
  servicePath: string,
  clientAlias = 'api',
) => {
  const clients = useFeathers()
  const client = clients[clientAlias as keyof typeof clients]
  return client.service(servicePath as any) as unknown as FeathersPiniaService<Result, Query>
}
