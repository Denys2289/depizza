import { InfoBlock } from "@/shared/components";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Доступ заборонений"
        text="Дану сторінку можуть бачити тільки авторизовані користувачі"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
