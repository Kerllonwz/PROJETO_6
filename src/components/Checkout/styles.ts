import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  overflow: hidden;
`

export const Sidebar = styled.div`
  width: 360px;
  max-width: 100%;
  height: 100%;
  background-color: #e66767;
  padding: 32px 8px;
  overflow-y: auto;
  overflow-x: hidden;
  color: #ffebd9;
  box-sizing: border-box;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffebd9;
  padding: 0 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: 155px 155px;
  gap: 34px;
  max-width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #ffebd9;
`

export const Input = styled.input`
  padding: 8px;
  border: none;
  background-color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  color: #4b4b4b;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #4b4b4b;
  }
`

export const Button = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`

export const BackButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
  }
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
  padding: 0 8px;
  margin-bottom: 16px;
`
