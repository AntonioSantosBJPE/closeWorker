import { MdEdit } from "react-icons/md";
import { StyledName, StyledProfile, StyledProfileDescription } from "./style";
import { ContainerHome } from "../style";
import { Title } from "../../../components/Title";
import { ImgProfile } from "../../../components/ImgProfile";
import { iPropsProfileMoreInfo } from "../type";

export const ProfileMoreInfo = ({ service }: iPropsProfileMoreInfo) => {
  return (
    <StyledProfile>
      <ContainerHome>
        <StyledProfileDescription>
          <ImgProfile
            alt="imagem de perfil do usuário"
            type="profile"
            srcLink={service.service_provider_avatar}
          />
          <StyledName>
            <div>
              <Title colorTitle="white" type="Heading1">
                {service.service_provider}
              </Title>
              <Title colorTitle="white" type="Body">
                {service.phone_number}
              </Title>
            </div>
          </StyledName>
        </StyledProfileDescription>
      </ContainerHome>
    </StyledProfile>
  );
};
