import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import TextForm from '../../_shared/form/TextForm';
import { IData, setDocumentFB } from '../../../firebase/query';
import PageTitle from '../../_shared/item/PageTitle';

import { RootState } from '../../../redux/store';

function WriteContainer() {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.auth?.user);

  const handleSubmit = async (data : IData) => {
    await setDocumentFB(data, user);
    history.push('/');
  };

  return (
    <Container>
      <PageTitle title="새글 작성" />
      <TextForm onSubmit={handleSubmit} submitType="작성 완료" />
    </Container>
  );
}

const Container = styled.div`
    padding: 50px 0;
`;

export default WriteContainer;
