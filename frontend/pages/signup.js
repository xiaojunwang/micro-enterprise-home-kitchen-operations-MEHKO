import Signup from '../components/Signup';
import Signin from '../components/Signin';
import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import { Alert } from 'reactstrap';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <>
    <h3>
      If you're experiencing trouble logging in after registering, please enable
      your browser's setting to accept third-party cookies!
    </h3>
    <br />
    <Columns>
      <Signup />
      <Signin />
      <RequestReset />
    </Columns>
  </>
);

export default SignupPage;
