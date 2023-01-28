import { forwardRef } from "react";
import * as Styled from "./styled";

const Main = forwardRef((props, ref) => {
  return (
    <>
      <Styled.FirstWrapper>
        <Styled.TitleText>
          개발자 포트폴리오 <br />
          -이정도-
        </Styled.TitleText>
        <Styled.Intro>
          반갑습니다. <br />
          번뜩이는 아이디어로 빠르게 성장하는 개발자 입니다. <br />
          새로운 스택을 배워 직접 적용해 보는것이 취미 입니다.
        </Styled.Intro>
      </Styled.FirstWrapper>
      <Styled.SecondWrapper ref={ref}>
        <Styled.TitleText>ABOUT ME</Styled.TitleText>
        <Styled.InfoBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/person.png`} />
            <Styled.Text1>
              이름
              <br />
              이정도
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image
              src={`${process.env.PUBLIC_URL}/assets/calendar.png`}
            />
            <Styled.Text1>
              생년월일
              <br />
              93.04.16
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/phone.png`} />
            <Styled.Text1>
              전화번호
              <br />
              010-4767-1986
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/marker.png`} />
            <Styled.Text1>
              주소
              <br />
              창원시
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/email.png`} />
            <Styled.Text1>
              이메일
              <br />
              bamiyamy@gmail.com
            </Styled.Text1>
          </Styled.TextBox>
        </Styled.InfoBox>
      </Styled.SecondWrapper>
      <Styled.ThirdWrapper>
        <Styled.CTitleText>Channel</Styled.CTitleText>
        <Styled.WrapperChannel>
          <Styled.ChannelBox>
            <Styled.LogoImage
              src={`${process.env.PUBLIC_URL}/assets/githublogo.png`}
            />
          </Styled.ChannelBox>
          <Styled.ChannelBox>
            <Styled.LogoImage
              src={`${process.env.PUBLIC_URL}/assets/veloglogo.png`}
            />
          </Styled.ChannelBox>
        </Styled.WrapperChannel>
      </Styled.ThirdWrapper>
      <Styled.FourthWrapper>
        <Styled.TitleText>Skills</Styled.TitleText>
        <Styled.WrapperSkills>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Backend</Styled.SkillName>
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/javalogo.png`}
              />
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/springbootlogo.png`}
              />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Frontend</Styled.SkillName>
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/hcjlogo.png`}
              />
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/reactlogo.png`}
              />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Version Control</Styled.SkillName>
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/gitlogo.png`}
              />
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/githublogo.png`}
              />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Communication</Styled.SkillName>
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/figmalogo.png`}
              />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Certificate</Styled.SkillName>
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/qnetlogo.png`}
              />
              <Styled.LogoImage
                src={`${process.env.PUBLIC_URL}/assets/certi.png`}
              />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
        </Styled.WrapperSkills>
      </Styled.FourthWrapper>
      <Styled.FifthWrapper>
        <Styled.TitleText>Projects</Styled.TitleText>
      </Styled.FifthWrapper>
    </>
  );
});
export default Main;
