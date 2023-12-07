import { useState } from 'react';
import { Banner, Button } from '@pega/cosmos-react-core';

const InfoBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {!showBanner && <Button onClick={() => setShowBanner(true)}>Open banner</Button>}
      {showBanner && (
        <Banner
          id='success'
          variant='success'
          onDismiss={() => setShowBanner(false)}
          messages={[
            'This is a Banner of type Paragragh (Field type) custom component designed from design.pega.com by Nagarjuna Reddy Mandati!'
          ]}
        />
      )}
    </>
  );
};

export default InfoBanner;
