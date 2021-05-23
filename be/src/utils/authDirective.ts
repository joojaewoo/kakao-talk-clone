import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField } from 'graphql';

export class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const [_, __, { authUser }] = args;
      if (authUser) {
        return await resolve.apply(this, args);
      }
      throw Error('not Authenticated');
    };
  }
}
