import { CognitoIdentityProviderClient, AdminCreateUserCommand } from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

const params = {
  UserPoolId: 'us-east-1_HAGxI043Q',
  Username: 'damian+yy@betterpt.com',
  UserAttributes: [
    {
      Name: 'email',
      Value: 'damian+yy@betterpt.com',
    },
    {
      Name: 'custom:userType',
      Value: '1',
    },

  ],
};

const run = async () => {
  try {
    const data = await client.send(new AdminCreateUserCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
}

run().catch(console.error);