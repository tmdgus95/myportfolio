import styled from 'styled-components';

interface SkillModalProps {
    Modal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    contents?: string[];
}

const SkillModal = ({ Modal, title, contents }: SkillModalProps) => {
    return (
        <SkillModalWrap onClick={() => Modal(false)}>
            <SkillModalInner>
                <p>{title}</p>
                <p>내가 할수있는것</p>
                {contents?.map((content, i) => (
                    <p key={i}>{content}</p>
                ))}
            </SkillModalInner>
        </SkillModalWrap>
    );
};

const SkillModalWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 282%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
`;
const SkillModalInner = styled.div`
    position: absolute;
    top: 32.5%;
    left: 25%;
    background: var(--color-white);
    width: 50%;
    height: 20%;

    @media (max-width: 1279px) and (min-width: 768px) {
        top: 37%;
        height: 20%;
    }

    @media (max-width: 767px) {
        top: 47%;
    }
`;

export default SkillModal;
