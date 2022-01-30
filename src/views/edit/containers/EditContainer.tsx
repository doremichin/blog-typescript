import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { useHistory, useParams } from 'react-router-dom';

import TextForm from '../../_shared/form/TextForm';
import { RootState } from '../../../redux/store';

import PageTitle from '../../_shared/item/PageTitle';
import { IData, updateDocumentFB } from '../../../firebase/query';

function EditContainer() {
  const history = useHistory();
  const { id } : any = useParams();
  const detail = useSelector((state: RootState) => state.blog.detail);
  if (Object.keys(detail).length < 1) {
    history.push('/');
  }
  const handleSubmit = async (data : IData) => {
    await updateDocumentFB('blog', id, data);
    history.push('/');
  };
  return (
    <Container>
      <PageTitle title="수정 페이지" />
      <TextForm onSubmit={handleSubmit} data={detail} submitType="수정 완료" defaultThumb={detail.thumbnailUrl} />
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 0;
`;

export default EditContainer;
