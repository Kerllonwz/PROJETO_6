import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Modal = styled.div`
  position: relative;
  max-width: 1024px;
  width: 90%;
  background-color: #e66767;
  padding: 32px;
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    opacity: 0.8;
  }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  flex: 1;
`

export const ProductPortion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`
