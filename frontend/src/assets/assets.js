import banner from './banner.svg'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import barb1 from './barb1.jpg'
import barb2 from './barb2.jpg'
import barb3 from './barb3.jpg'
import barb4 from './barb4.jpg'
import barb5 from './barb5.jpg'
import barb6 from './barb6.jpg'
import barb7 from './barb7.jpg'
import barb8 from './barb8.jpg'
import barb9 from './barb9.jpg'
import barb10 from './barb10.jpg'
import barb11 from './barb11.jpg'
import barb12 from './barb12.jpg'
import barb13 from './barb13.jpg'
import barb14 from './barb14.jpg'
import barb15 from './barb15.jpg'
import corte from './corte.svg'
import barba from './barba.svg'
import sobrancelha from './sobrancelha.svg'
import assinatura from './assinatura.svg'
import combo from './combo.svg'
import pintura from './pintura.svg'


export const assets = {
    banner,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const servicesData = [
    {
        services: 'corte',
        image: corte
    },
    {
        services: 'barba',
        image: barba
    },
    {
        services: 'sobrancelha',
        image: sobrancelha
    },
    {
        services: 'assinatura',
        image: assinatura
    },
    {
        services: 'combo',
        image: combo
    },
    {
        services: 'pintura',
        image: pintura
    }
]

export const barbers = [
    {
        _id: 'barb1',
        name: 'João Silva',
        image: barb1,
        services: ['Corte', 'Barba', 'Sobrancelha', 'Combo'],
        experience: '5 Anos',
        about: 'Especialista em cortes masculinos modernos, barba e acabamento. João busca entregar um visual personalizado para cada cliente.',
        fees: 50,
        address: {
            line1: 'Rua Augusto Klimmek, Centro',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb2',
        name: 'Carlos Henrique',
        image: barb2,
        services: ['Corte', 'Pintura', 'Combo'],
        experience: '7 Anos',
        about: 'Profissional especializado em cortes clássicos, modernos e técnicas de coloração masculina.',
        fees: 60,
        address: {
            line1: 'Rua Jorge Zipperer, Centro',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb3',
        name: 'Lucas Ferreira',
        image: barb3,
        services: ['Barba', 'Sobrancelha', 'Assinatura'],
        experience: '3 Anos',
        about: 'Especialista em barba profissional, alinhamento e cuidados masculinos personalizados.',
        fees: 40,
        address: {
            line1: 'Rua Capitão Ernesto Nunes',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb4',
        name: 'Rafael Souza',
        image: barb4,
        services: ['Corte', 'Barba', 'Combo', 'Pintura'],
        experience: '6 Anos',
        about: 'Atua com cortes modernos, transformação de visual e técnicas avançadas de estilo masculino.',
        fees: 70,
        address: {
            line1: 'Rua Barão do Rio Branco',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb5',
        name: 'Mateus Oliveira',
        image: barb5,
        services: ['Corte', 'Sobrancelha', 'Combo'],
        experience: '4 Anos',
        about: 'Focado em cortes detalhados, acabamento perfeito e atendimento personalizado.',
        fees: 50,
        address: {
            line1: 'Rua Paulo Parucker',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb6',
        name: 'Pedro Martins',
        image: barb6,
        services: ['Barba', 'Pintura', 'Assinatura'],
        experience: '8 Anos',
        about: 'Especialista em barba, cuidados masculinos e planos de manutenção para clientes frequentes.',
        fees: 80,
        address: {
            line1: 'Rua Marechal Floriano',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb7',
        name: 'Gabriel Santos',
        image: barb7,
        services: ['Corte', 'Barba'],
        experience: '4 Anos',
        about: 'Especialista em cortes degradê, estilos modernos e barba tradicional.',
        fees: 45,
        address: {
            line1: 'Rua Antônio Kaesemodel',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb8',
        name: 'Felipe Almeida',
        image: barb8,
        services: ['Corte', 'Combo', 'Sobrancelha'],
        experience: '5 Anos',
        about: 'Profissional dedicado a cortes masculinos e detalhes que fazem diferença no resultado final.',
        fees: 55,
        address: {
            line1: 'Rua Benjamin Constant',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb9',
        name: 'Bruno Costa',
        image: barb9,
        services: ['Barba', 'Corte', 'Assinatura'],
        experience: '6 Anos',
        about: 'Especialista em visagismo masculino e cuidados contínuos para manter seu estilo.',
        fees: 65,
        address: {
            line1: 'Rua Alfredo Zierhut',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb10',
        name: 'André Pereira',
        image: barb10,
        services: ['Pintura', 'Corte', 'Combo'],
        experience: '9 Anos',
        about: 'Experiência em cortes masculinos, coloração e mudanças completas de visual.',
        fees: 90,
        address: {
            line1: 'Rua Rosina Diener Zipperer',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb11',
        name: 'Thiago Mendes',
        image: barb11,
        services: ['Corte', 'Barba', 'Sobrancelha'],
        experience: '3 Anos',
        about: 'Especializado em acabamento, cortes rápidos e atendimento de qualidade.',
        fees: 45,
        address: {
            line1: 'Rua Nereu Ramos',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb12',
        name: 'Diego Rodrigues',
        image: barb12,
        services: ['Combo', 'Barba', 'Assinatura'],
        experience: '7 Anos',
        about: 'Profissional focado em experiências completas de barbearia e cuidados masculinos.',
        fees: 75,
        address: {
            line1: 'Rua Mathias Nossol',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb13',
        name: 'Henrique Lima',
        image: barb13,
        services: ['Corte', 'Pintura'],
        experience: '5 Anos',
        about: 'Especialista em tendências masculinas, cortes atuais e transformação de estilo.',
        fees: 70,
        address: {
            line1: 'Rua Felipe Schmidt',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb14',
        name: 'Vinícius Rocha',
        image: barb14,
        services: ['Barba', 'Sobrancelha', 'Combo'],
        experience: '4 Anos',
        about: 'Especialista em barba desenhada, acabamento e estética masculina.',
        fees: 55,
        address: {
            line1: 'Rua Wenzel Kahlhofer',
            line2: 'São Bento do Sul - SC'
        }
    },
    {
        _id: 'barb15',
        name: 'Marcos Vieira',
        image: barb15,
        services: ['Corte', 'Barba', 'Pintura', 'Combo', 'Assinatura'],
        experience: '10 Anos',
        about: 'Barbeiro experiente com foco em cortes premium e atendimento completo.',
        fees: 100,
        address: {
            line1: 'Rua Jorge Diener',
            line2: 'São Bento do Sul - SC'
        }
    }
];
