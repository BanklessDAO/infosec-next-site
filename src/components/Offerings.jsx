import { ShieldCheckIcon, UserGroupIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Web Security & Auditing',
        description:
            'Infrastructure and IAM audit services to ensure your environments are protected.',
        icon: LockClosedIcon,
    },
    {
        name: 'Dev Ops',
        description:
            'Infrastructure design, CI/CD automation, Infrastructure deployment, management and audit.',
        icon: UserGroupIcon,
    },
    {
        name: 'Zero Trust',
        description:
            'Modern authentication models for organizations.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Discord Security & Management',
        description:
            'Discord setup, roles and permission, and ongoing security management to keep spammers and bots from infiltrating your community.',
        icon: ShieldCheckIcon,
    },
]

function Offerings() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        All you need for your Organization Security & Infra.
                    </p>
                    {/* <p className="mt-6 text-lg leading-8 text-white">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p> */}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Offerings