import Image from "next/image";

// Logo oficial da Clínica Vladia Nutri (recortado da arte da Vladia, fundo transparente).
// Arquivos em /public/brand: logo-mark.png (maçã), logo-texto.png (nome), logo-completo.png (empilhado).
// `sizes` com o tamanho real exibido evita baixar versões grandes demais.
export default function Logo() {
  return (
    <span className="flex items-center gap-2">
      <Image src="/brand/logo-mark.png" alt="" width={213} height={263} sizes="40px" className="h-12 w-auto" />
      <Image
        src="/brand/logo-texto.png"
        alt="Clínica Vladia Nutri – Nutrição Clínica"
        width={716}
        height={220}
        sizes="150px"
        className="h-9 w-auto sm:h-11"
      />
    </span>
  );
}
