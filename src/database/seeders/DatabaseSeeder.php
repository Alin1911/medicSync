<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Prescription;
use App\Models\Medication;
use App\Models\Pharmacy;
use App\Models\QRCode;
use App\Models\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $medicRole = Role::firstOrCreate(['name' => 'medic']);
        $patientRole = Role::firstOrCreate(['name' => 'patient']);
        $pharmacyRole = Role::firstOrCreate(['name' => 'farmacist']);

        // Medici
        $medici = collect();
        $user = User::create(['name' => 'Mitică Diaconu', 'email' => 'dmazilescu@kappa.ro', 'cnp' => '155347195615', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Aurora Florea', 'email' => 'paulinamanole@acasa.ro', 'cnp' => '199841698396', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Teona Cristea', 'email' => 'enedariana@acasa.ro', 'cnp' => '117654045981', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Florentin Ardelean', 'email' => 'maximiliansuciu@kappa.ro', 'cnp' => '185348091586', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Dumitra Florea', 'email' => 'opreacaius@email.ro', 'cnp' => '113538421012', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Nicușor Ardelean', 'email' => 'georgelpuscasu@141.ro', 'cnp' => '161120022437', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Timotei Nistor', 'email' => 'laviniaeftimie@email.ro', 'cnp' => '197072736914', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Bianca Ionescu', 'email' => 'ardeleantudor@post.ro', 'cnp' => '120422582372', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Narcisa Tabacu', 'email' => 'georgesculorin@kappa.ro', 'cnp' => '122078630126', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Tinca Voinea', 'email' => 'diaconulaurentia@post.ro', 'cnp' => '159847777429', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Cosmina Ionescu', 'email' => 'ivona84@acasa.ro', 'cnp' => '112221788511', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Jenel Pușcașu', 'email' => 'adelin44@gmail.com', 'cnp' => '133820816437', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Aura Tudor', 'email' => 'aaneizina@zzup.ro', 'cnp' => '158467333090', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Crenguța Dobre', 'email' => 'iuliangheorghiu@acasa.ro', 'cnp' => '176188654394', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Frederic Albu', 'email' => 'manolebrandusa@acasa.ro', 'cnp' => '106889621299', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Victoria Niță', 'email' => 'brandusa65@gmail.com', 'cnp' => '177617821981', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Anaida Ababei', 'email' => 'dinurada@acasa.ro', 'cnp' => '190360459508', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Carla Toma', 'email' => 'manolemocanu@kappa.ro', 'cnp' => '161050423780', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Șerban Voinea', 'email' => 'stoicaflorenta@acasa.ro', 'cnp' => '150404728011', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Mariana Manole', 'email' => 'dobregheorghe@zzup.ro', 'cnp' => '139818435954', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Maria Stoica', 'email' => 'stoicacristobal@post.ro', 'cnp' => '172923726945', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Ernest Ene', 'email' => 'dumitrescupetrica@zzup.ro', 'cnp' => '128084523197', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Inocențiu Preda', 'email' => 'ardeleansebastian@kappa.ro', 'cnp' => '106401348138', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Janina Ioniță', 'email' => 'stanescualex@email.ro', 'cnp' => '105158489324', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Daiana Diaconu', 'email' => 'cristearafael@email.ro', 'cnp' => '114997817105', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Heracleea Nemeș', 'email' => 'bnita@gmail.com', 'cnp' => '154685967175', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Olimpiu Diaconescu', 'email' => 'marinvisarion@141.ro', 'cnp' => '142168567980', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Janina Stănescu', 'email' => 'eneileana@acasa.ro', 'cnp' => '148745324796', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Laura Diaconu', 'email' => 'adrianastan@kappa.ro', 'cnp' => '163705440382', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Florina Oprea', 'email' => 'teonadiaconu@zzup.ro', 'cnp' => '141860210250', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Ionuț Preda', 'email' => 'zalbu@email.ro', 'cnp' => '106754447865', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Nicoară Tudor', 'email' => 'tnistor@141.ro', 'cnp' => '111768542627', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Daniela Popescu', 'email' => 'olimpianpop@141.ro', 'cnp' => '126935180863', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Constantin Ardelean', 'email' => 'mihaela10@post.ro', 'cnp' => '112533764591', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Angela Dima', 'email' => 'tabacufiodor@zzup.ro', 'cnp' => '170029913268', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Silviana Dima', 'email' => 'eftimielica@acasa.ro', 'cnp' => '102951246210', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Mădălin Diaconu', 'email' => 'ctabacu@zzup.ro', 'cnp' => '126753100914', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Elisabeta Tabacu', 'email' => 'ioanaaanei@acasa.ro', 'cnp' => '150874184861', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Renata Diaconescu', 'email' => 'dinujana@141.ro', 'cnp' => '113261571177', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Iolanda Dima', 'email' => 'rgheorghiu@141.ro', 'cnp' => '160018397696', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Mirela Voinea', 'email' => 'cristiandochioiu@gmail.com', 'cnp' => '136046874510', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Dorina Diaconu', 'email' => 'jstan@post.ro', 'cnp' => '163272016537', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Silvian Ababei', 'email' => 'dimamiruna@acasa.ro', 'cnp' => '183504078162', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Pătru Stoica', 'email' => 'hdumitrescu@post.ro', 'cnp' => '150877808304', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Zaraza Dima', 'email' => 'ngeorgescu@kappa.ro', 'cnp' => '134730675511', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Maricica Popescu', 'email' => 'anaida49@kappa.ro', 'cnp' => '118303693200', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Ecaterina Eftimie', 'email' => 'suciusebastian@zzup.ro', 'cnp' => '100345274688', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Gicu Ionescu', 'email' => 'voineaflorica@post.ro', 'cnp' => '176247029433', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Petruța Dochioiu', 'email' => 'semenicapopa@acasa.ro', 'cnp' => '101660194000', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        $user = User::create(['name' => 'Gianina Toma', 'email' => 'albueugen@kappa.ro', 'cnp' => '150427787988', 'password' => Hash::make('parola123')]);
        $user->assignRole($medicRole);
        $medici->push($user);
        // Pacienți
        $pacienti = collect();
        $user = User::create(['name' => 'Olimpiu Nistor', 'email' => 'eababei@email.ro', 'cnp' => '266841096354', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Manuela Stănescu', 'email' => 'popieremia@141.ro', 'cnp' => '217686121754', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Norman Gheorghiu', 'email' => 'voichita36@acasa.ro', 'cnp' => '274252874350', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Eftimia Suciu', 'email' => 'xnemes@141.ro', 'cnp' => '278396589147', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Elisabeta Manole', 'email' => 'nistormariana@acasa.ro', 'cnp' => '238303298673', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Silviana Tabacu', 'email' => 'barbuviorela@kappa.ro', 'cnp' => '232736699758', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sandu Dinu', 'email' => 'icapreda@kappa.ro', 'cnp' => '247699733073', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Letiția Stancu', 'email' => 'stancutatiana@141.ro', 'cnp' => '256762388174', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Octavia Stănescu', 'email' => 'dumitrescudaria@zzup.ro', 'cnp' => '260446462973', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Gabriela Voinea', 'email' => 'ivoinea@post.ro', 'cnp' => '285901913458', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Georgia Stancu', 'email' => 'diaconescuaxinte@kappa.ro', 'cnp' => '200652458577', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Robertina Florea', 'email' => 'floreaagripina@kappa.ro', 'cnp' => '211614786155', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ionelia Ionescu', 'email' => 'stancumarin@kappa.ro', 'cnp' => '297276451398', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Octavia Mazilescu', 'email' => 'aaneitodor@gmail.com', 'cnp' => '224058822967', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Lucreția Ionescu', 'email' => 'lgeorgescu@141.ro', 'cnp' => '236299685530', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Leana Nistor', 'email' => 'izabelaalbu@post.ro', 'cnp' => '258370033106', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Vlaicu Tudor', 'email' => 'mazilescuartemisa@zzup.ro', 'cnp' => '247171456531', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Noemi Marin', 'email' => 'suciugeorgian@post.ro', 'cnp' => '215021594208', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Robertina Tudor', 'email' => 'aaneiviviana@141.ro', 'cnp' => '279770773757', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marcel Ababei', 'email' => 'ardeleanofelia@gmail.com', 'cnp' => '299963489683', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Nechifor Ardelean', 'email' => 'diaconescuvoichita@post.ro', 'cnp' => '222886873578', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Clarisa Diaconu', 'email' => 'georgescucosmin@zzup.ro', 'cnp' => '267736979498', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Romeo Dochioiu', 'email' => 'diaconescuxenia@kappa.ro', 'cnp' => '258669018472', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Viorel Stan', 'email' => 'ctoma@acasa.ro', 'cnp' => '274922548218', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Liliana Toma', 'email' => 'gstoica@kappa.ro', 'cnp' => '206492414404', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Codin Florea', 'email' => 'ionicasuciu@kappa.ro', 'cnp' => '289396236823', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cătălin Ionescu', 'email' => 'ipuscasu@email.ro', 'cnp' => '291057853418', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Carina Popa', 'email' => 'tomescuilinca@zzup.ro', 'cnp' => '270567198689', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ramona Nistor', 'email' => 'radadochioiu@email.ro', 'cnp' => '234371293892', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Tudora Diaconu', 'email' => 'gratiana33@zzup.ro', 'cnp' => '240263939014', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marilena Voinea', 'email' => 'mariussuciu@email.ro', 'cnp' => '231232464784', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alice Diaconescu', 'email' => 'stoicamitica@141.ro', 'cnp' => '280387881628', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Axinte Ionescu', 'email' => 'albubartolomeu@post.ro', 'cnp' => '289878410092', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alexe Stancu', 'email' => 'remusbarbu@post.ro', 'cnp' => '212027252148', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Norman Tomescu', 'email' => 'adiaconescu@post.ro', 'cnp' => '217729499307', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Saveta Manole', 'email' => 'stanescuandrei@zzup.ro', 'cnp' => '242661521234', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Suzana Florea', 'email' => 'qdima@141.ro', 'cnp' => '280904251992', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mariana Pușcașu', 'email' => 'zmocanu@email.ro', 'cnp' => '203048897012', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Haralambie Popescu', 'email' => 'nistorisabela@acasa.ro', 'cnp' => '265034295620', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Casandra Pop', 'email' => 'mugureldiaconescu@kappa.ro', 'cnp' => '250031416778', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Jenel Stănescu', 'email' => 'diaconescucedrin@zzup.ro', 'cnp' => '207987509312', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Olivia Diaconescu', 'email' => 'cezarpopescu@acasa.ro', 'cnp' => '265058607005', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Adrian Dima', 'email' => 'loreleistan@141.ro', 'cnp' => '294701509952', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alis Nistor', 'email' => 'gentianatudor@gmail.com', 'cnp' => '245196043852', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Antonie Toma', 'email' => 'popairinel@post.ro', 'cnp' => '221197094821', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Edgar Dinu', 'email' => 'nmocanu@kappa.ro', 'cnp' => '282068749590', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Roxana Stoica', 'email' => 'rene@kappa.ro', 'cnp' => '261519457015', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marta Dinu', 'email' => 'tabacufrederic@post.ro', 'cnp' => '231379910965', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Eliza Cristea', 'email' => 'visarion10@post.ro', 'cnp' => '275818967230', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iuliana Oprea', 'email' => 'zaanei@post.ro', 'cnp' => '248052675661', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Crenguța Eftimie', 'email' => 'eftimieionel@email.ro', 'cnp' => '237009909515', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iuliu Popescu', 'email' => 'diaconescuioanina@gmail.com', 'cnp' => '261260206209', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alina Nistor', 'email' => 'sanziana98@zzup.ro', 'cnp' => '219957259957', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Lorelei Pop', 'email' => 'ionescuilinca@zzup.ro', 'cnp' => '230589945262', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Daniel Pop', 'email' => 'voineaiancu@post.ro', 'cnp' => '243833679497', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Floarea Ioniță', 'email' => 'psuciu@kappa.ro', 'cnp' => '247208732814', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ieremia Dochioiu', 'email' => 'gheorghiuernest@gmail.com', 'cnp' => '217066670564', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ioana Dumitrescu', 'email' => 'ipuscasu@post.ro', 'cnp' => '278929256966', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Relu Manole', 'email' => 'stanemanuel@post.ro', 'cnp' => '223041933702', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cornelia Nistor', 'email' => 'marinveronica@email.ro', 'cnp' => '261993474409', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Amza Dima', 'email' => 'ionescunae@141.ro', 'cnp' => '220988784404', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Petrică Albu', 'email' => 'teodosiaionita@gmail.com', 'cnp' => '227486032028', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Catrina Dobre', 'email' => 'veneraeftimie@post.ro', 'cnp' => '296489307514', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Eliana Popa', 'email' => 'cdiaconu@141.ro', 'cnp' => '239881058204', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Nichifor Florea', 'email' => 'rozaliaalbu@email.ro', 'cnp' => '288308033023', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Victoria Diaconescu', 'email' => 'zenobiadiaconu@kappa.ro', 'cnp' => '263542679727', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Felix Gheorghiu', 'email' => 'hionita@post.ro', 'cnp' => '210519537561', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marilena Manole', 'email' => 'amanole@gmail.com', 'cnp' => '200298966518', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Janina Ioniță', 'email' => 'malvinanistor@zzup.ro', 'cnp' => '293856504479', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ana Dinu', 'email' => 'ocristea@acasa.ro', 'cnp' => '252461328447', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Grigore Stănescu', 'email' => 'wbarbu@141.ro', 'cnp' => '274071780467', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Florica Dima', 'email' => 'jionita@gmail.com', 'cnp' => '260529774294', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ecaterina Niță', 'email' => 'floreaaura@post.ro', 'cnp' => '242670172889', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Margareta Eftimie', 'email' => 'liviupuscasu@gmail.com', 'cnp' => '274957490647', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cristina Popescu', 'email' => 'pdobre@acasa.ro', 'cnp' => '277421154219', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ilinca Pop', 'email' => 'xeniadinu@gmail.com', 'cnp' => '224332093664', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Benone Dinu', 'email' => 'popcarina@acasa.ro', 'cnp' => '217470615155', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Georgian Ionescu', 'email' => 'opreaandrian@post.ro', 'cnp' => '236001892328', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Julia Toma', 'email' => 'kstoica@email.ro', 'cnp' => '220203241660', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sandu Nistor', 'email' => 'yaanei@gmail.com', 'cnp' => '227687980189', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Roza Georgescu', 'email' => 'savinavoinea@kappa.ro', 'cnp' => '205033295368', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ladislau Dima', 'email' => 'ctabacu@post.ro', 'cnp' => '254190370558', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Dorli Preda', 'email' => 'ina94@141.ro', 'cnp' => '296652730613', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ernest Nistor', 'email' => 'sandastanescu@acasa.ro', 'cnp' => '253969577387', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cristina Popa', 'email' => 'jnistor@zzup.ro', 'cnp' => '245147913648', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Codin Mazilescu', 'email' => 'dimadaniela@zzup.ro', 'cnp' => '282338242541', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Francesca Tudor', 'email' => 'imarin@141.ro', 'cnp' => '225482113391', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ciprian Diaconescu', 'email' => 'suciuvaleria@141.ro', 'cnp' => '251688247406', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ariadna Voinea', 'email' => 'anatoliegeorgescu@zzup.ro', 'cnp' => '281857582457', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Vlaicu Toma', 'email' => 'xdinu@acasa.ro', 'cnp' => '276265949783', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alexandru Manole', 'email' => 'nistormircea@acasa.ro', 'cnp' => '268789805838', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Georgel Gheorghiu', 'email' => 'puscasufilofteia@141.ro', 'cnp' => '259450745240', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marin Mocanu', 'email' => 'popinocentiu@kappa.ro', 'cnp' => '219093882412', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Anatolie Manole', 'email' => 'nmanole@zzup.ro', 'cnp' => '208937744203', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Petruța Mocanu', 'email' => 'nemesfrancesca@zzup.ro', 'cnp' => '270897184768', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Albert Nistor', 'email' => 'aaneimiron@gmail.com', 'cnp' => '248027900253', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Octav Albu', 'email' => 'xtoma@141.ro', 'cnp' => '261303656219', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Călin Stoica', 'email' => 'ardeleancodrin@email.ro', 'cnp' => '299640918152', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Arian Tudor', 'email' => 'qnistor@141.ro', 'cnp' => '265759463995', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ruxandra Toma', 'email' => 'kardelean@zzup.ro', 'cnp' => '231615735536', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Irina Tudor', 'email' => 'ababeiantim@kappa.ro', 'cnp' => '261393198598', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cornel Ene', 'email' => 'diaconescudumitra@kappa.ro', 'cnp' => '235167962120', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Floarea Stancu', 'email' => 'apuscasu@kappa.ro', 'cnp' => '263107535805', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Aureliana Dochioiu', 'email' => 'jnistor@kappa.ro', 'cnp' => '217734648108', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Tincuța Tomescu', 'email' => 'stoicaalida@gmail.com', 'cnp' => '231229199038', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ghenadie Albu', 'email' => 'georgescueusebia@141.ro', 'cnp' => '210221816872', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Veta Pop', 'email' => 'nistordoriana@gmail.com', 'cnp' => '266306588177', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alis Manole', 'email' => 'gheorghiuiurie@gmail.com', 'cnp' => '256090050212', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Zenovia Barbu', 'email' => 'diaconescusavina@post.ro', 'cnp' => '291126114323', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Timotei Stan', 'email' => 'dobredorli@141.ro', 'cnp' => '230409557201', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mina Aanei', 'email' => 'lascardinu@141.ro', 'cnp' => '201018310408', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ozana Nistor', 'email' => 'albuheracleea@post.ro', 'cnp' => '242854200254', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Casandra Stănescu', 'email' => 'popescuoctav@zzup.ro', 'cnp' => '295294116431', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Alina Ardelean', 'email' => 'stoma@acasa.ro', 'cnp' => '209098295320', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Marcu Cristea', 'email' => 'puscasuloredana@acasa.ro', 'cnp' => '264099567514', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Liana Ababei', 'email' => 'popmirela@acasa.ro', 'cnp' => '219137570198', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sever Aanei', 'email' => 'snistor@acasa.ro', 'cnp' => '225043633006', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Gabriela Mazilescu', 'email' => 'vincentiudumitrescu@zzup.ro', 'cnp' => '206228343377', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mălina Tabacu', 'email' => 'nistorivan@post.ro', 'cnp' => '230451090636', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Jenel Dumitrescu', 'email' => 'visariontudor@post.ro', 'cnp' => '234464176652', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ica Popa', 'email' => 'qmocanu@kappa.ro', 'cnp' => '281838149791', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Rica Ardelean', 'email' => 'georgescuhorea@acasa.ro', 'cnp' => '269999565090', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Lucreția Toma', 'email' => 'iuliaionita@kappa.ro', 'cnp' => '288977888493', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Eliza Tomescu', 'email' => 'wsuciu@gmail.com', 'cnp' => '271405327728', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Codrin Voinea', 'email' => 'bdochioiu@acasa.ro', 'cnp' => '206849202227', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Fabia Stoica', 'email' => 'marinalberta@email.ro', 'cnp' => '276748144465', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Fabia Preda', 'email' => 'stanescuvaleriu@kappa.ro', 'cnp' => '270832556340', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ieremia Voinea', 'email' => 'georgescuirinel@post.ro', 'cnp' => '249873134836', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Gina Dinu', 'email' => 'georgescuortansa@141.ro', 'cnp' => '285165804774', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mina Nistor', 'email' => 'adonismazilescu@141.ro', 'cnp' => '280225774778', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Aglaia Eftimie', 'email' => 'ueftimie@zzup.ro', 'cnp' => '295386086441', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Erica Voinea', 'email' => 'ntabacu@gmail.com', 'cnp' => '242448325981', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ecaterina Marin', 'email' => 'albertina14@zzup.ro', 'cnp' => '229214207879', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iuliu Manole', 'email' => 'anica56@gmail.com', 'cnp' => '298755340140', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Zamfira Dinu', 'email' => 'ynita@zzup.ro', 'cnp' => '244188338202', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Simion Oprea', 'email' => 'gmarin@gmail.com', 'cnp' => '205718648472', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Floarea Oprea', 'email' => 'dumitrescucornelia@email.ro', 'cnp' => '299928540386', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Giorgian Dochioiu', 'email' => 'georgia56@gmail.com', 'cnp' => '231413180423', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Crenguța Tabacu', 'email' => 'cristoforpopa@zzup.ro', 'cnp' => '295174442569', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Octaviana Ardelean', 'email' => 'jan40@gmail.com', 'cnp' => '296186366459', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Vlad Stancu', 'email' => 'marinofelia@email.ro', 'cnp' => '221440058066', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Nadia Marin', 'email' => 'cpopa@post.ro', 'cnp' => '270072171638', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Dumitrana Pop', 'email' => 'mihaelapuscasu@email.ro', 'cnp' => '217522953117', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Dariana Dobre', 'email' => 'nistorcrenguta@141.ro', 'cnp' => '249306567895', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Norman Dochioiu', 'email' => 'andramocanu@gmail.com', 'cnp' => '262684201367', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Evanghelina Toma', 'email' => 'ardeleanantonia@kappa.ro', 'cnp' => '218099899116', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iuliu Manole', 'email' => 'mocanuartemisa@gmail.com', 'cnp' => '261773236354', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mitică Preda', 'email' => 'floreaanca@email.ro', 'cnp' => '254009089661', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Silviana Gheorghiu', 'email' => 'georgescutimotei@kappa.ro', 'cnp' => '298945362274', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cristea Ioniță', 'email' => 'popcorneliu@kappa.ro', 'cnp' => '251275235578', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Crina Diaconescu', 'email' => 'eftimieelisabeta@post.ro', 'cnp' => '299633322406', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ionică Toma', 'email' => 'vladelina41@acasa.ro', 'cnp' => '232399858580', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ancuța Marin', 'email' => 'gheorghiuantonela@141.ro', 'cnp' => '294598981620', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Cleopatra Popescu', 'email' => 'bmarin@email.ro', 'cnp' => '248610985805', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Zamfir Nemeș', 'email' => 'predavictor@acasa.ro', 'cnp' => '235747158882', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Pătru Nistor', 'email' => 'stelianadiaconu@kappa.ro', 'cnp' => '289884738287', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Stana Eftimie', 'email' => 'voineadavid@post.ro', 'cnp' => '270653106820', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Denis Tudor', 'email' => 'dimanora@email.ro', 'cnp' => '272771891168', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Elvira Florea', 'email' => 'cpopescu@kappa.ro', 'cnp' => '255503219814', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sorin Stan', 'email' => 'catrinel41@141.ro', 'cnp' => '295374298483', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Mariana Georgescu', 'email' => 'popescucristian@zzup.ro', 'cnp' => '222967417447', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Emilia Pop', 'email' => 'jpuscasu@gmail.com', 'cnp' => '270156296556', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iulia Suciu', 'email' => 'ionescusanziana@kappa.ro', 'cnp' => '242556156684', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Roxelana Marin', 'email' => 'zionita@kappa.ro', 'cnp' => '237771314634', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Octaviu Pușcașu', 'email' => 'qstancu@acasa.ro', 'cnp' => '250055225126', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Carol Ene', 'email' => 'emiliapopescu@141.ro', 'cnp' => '221390607893', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Frederic Tomescu', 'email' => 'htudor@gmail.com', 'cnp' => '290476238116', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Codrina Preda', 'email' => 'popescuadi@141.ro', 'cnp' => '263788070085', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Crina Nistor', 'email' => 'mazilescunatalia@acasa.ro', 'cnp' => '202801181034', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Suzana Gheorghiu', 'email' => 'gnita@email.ro', 'cnp' => '219259915254', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Floare Dinu', 'email' => 'rsuciu@141.ro', 'cnp' => '295993298259', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Artemisa Dochioiu', 'email' => 'cazimirnistor@gmail.com', 'cnp' => '204414007598', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Toma Mazilescu', 'email' => 'floreagrigore@email.ro', 'cnp' => '299397461847', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Vincențiu Florea', 'email' => 'corneliudobre@gmail.com', 'cnp' => '278888764451', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Gabriela Dobre', 'email' => 'suciuanca@acasa.ro', 'cnp' => '272415222901', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Dina Mocanu', 'email' => 'sinicatoma@email.ro', 'cnp' => '211118563148', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sava Tomescu', 'email' => 'profiratomescu@acasa.ro', 'cnp' => '223525524500', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sabrina Georgescu', 'email' => 'eftimieanatolie@141.ro', 'cnp' => '270162706031', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ciprian Stancu', 'email' => 'znistor@post.ro', 'cnp' => '257470866303', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Aurel Dinu', 'email' => 'popescumartin@gmail.com', 'cnp' => '276431660336', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Daria Cristea', 'email' => 'mazilescugheorghe@zzup.ro', 'cnp' => '236757925394', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Casiana Gheorghiu', 'email' => 'nitaruxanda@kappa.ro', 'cnp' => '296420351769', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ruxandra Pop', 'email' => 'patriciastanescu@zzup.ro', 'cnp' => '211836118070', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ivan Popescu', 'email' => 'eaanei@zzup.ro', 'cnp' => '247268562119', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Sinică Diaconescu', 'email' => 'halbu@kappa.ro', 'cnp' => '229302566221', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Achim Pop', 'email' => 'ieftimie@gmail.com', 'cnp' => '230945656058', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Georgel Suciu', 'email' => 'marinemanuil@gmail.com', 'cnp' => '239650425814', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Doina Diaconu', 'email' => 'eftimieromulus@kappa.ro', 'cnp' => '247482020064', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Iulia Nistor', 'email' => 'tabacuanghel@acasa.ro', 'cnp' => '204243950260', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Demetra Ene', 'email' => 'iliestoica@email.ro', 'cnp' => '235242746198', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Lavinia Pop', 'email' => 'mazilescuina@kappa.ro', 'cnp' => '221516284281', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Gicu Dobre', 'email' => 'mazilescumaximilian@kappa.ro', 'cnp' => '286945655588', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Julieta Ababei', 'email' => 'gratian51@post.ro', 'cnp' => '278763711568', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ionel Toma', 'email' => 'mocanusilvian@zzup.ro', 'cnp' => '231145013389', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Avram Stan', 'email' => 'nemesionut@email.ro', 'cnp' => '244784352295', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Camelia Dinu', 'email' => 'qgheorghiu@post.ro', 'cnp' => '202684294003', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Dorel Stoica', 'email' => 'puscasuastrid@post.ro', 'cnp' => '298068105515', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Petruța Pușcașu', 'email' => 'eneveta@post.ro', 'cnp' => '284978910294', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Vera Stoica', 'email' => 'cleopatrastancu@zzup.ro', 'cnp' => '276990508053', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        $user = User::create(['name' => 'Ioanina Ababei', 'email' => 'gheorghitadumitrescu@acasa.ro', 'cnp' => '287649157766', 'password' => Hash::make('parola123')]);
        $user->assignRole($patientRole);
        $pacienti->push($user);
        // Farmacii
        $farmacii = collect();
        $user = User::create(['name' => 'Florea', 'email' => 'mmazilescu@email.ro', 'cnp' => '387228510998', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Tudor Cristea ASF', 'email' => 'epopa@post.ro', 'cnp' => '356799556720', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Tomescu Ene CRL', 'email' => 'xcristea@141.ro', 'cnp' => '302468830111', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Mocanu', 'email' => 'jtabacu@kappa.ro', 'cnp' => '320979005976', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Manole', 'email' => 'gdima@kappa.ro', 'cnp' => '362960884275', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Diaconu', 'email' => 'jmanole@gmail.com', 'cnp' => '369480601615', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Tomescu Barbu PFA', 'email' => 'nitapamfil@gmail.com', 'cnp' => '312080556760', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Pușcașu', 'email' => 'pauladumitrescu@zzup.ro', 'cnp' => '398587025928', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Tabacu Nemeș SA', 'email' => 'leliapuscasu@zzup.ro', 'cnp' => '348920211720', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        $user = User::create(['name' => 'Mocanu', 'email' => 'cnemes@acasa.ro', 'cnp' => '341382692176', 'password' => Hash::make('parola123')]);
        $user->assignRole($pharmacyRole);
        $farmacii->push($user);
        // Medicamente
        $medicamente = collect();
        $medicamente->push(Medication::create(['nume' => 'Mollitia', 'doza' => '947mg', 'descriere' => 'Veritatis enim iusto odio.']));
        $medicamente->push(Medication::create(['nume' => 'Pariatur', 'doza' => '781mg', 'descriere' => 'Exercitationem alias quasi beatae optio quod consequatur.']));
        $medicamente->push(Medication::create(['nume' => 'Delectus', 'doza' => '814mg', 'descriere' => 'Temporibus debitis in provident vel error nisi commodi.']));
        $medicamente->push(Medication::create(['nume' => 'Quaerat', 'doza' => '215mg', 'descriere' => 'Deserunt laborum beatae laboriosam nostrum.']));
        $medicamente->push(Medication::create(['nume' => 'Et', 'doza' => '852mg', 'descriere' => 'Magni quod quasi sit facilis voluptates.']));
        $medicamente->push(Medication::create(['nume' => 'Laudantium', 'doza' => '897mg', 'descriere' => 'Doloribus modi cupiditate porro.']));
        $medicamente->push(Medication::create(['nume' => 'At', 'doza' => '908mg', 'descriere' => 'Fugiat debitis rerum repellendus quasi placeat voluptate voluptatum.']));
        $medicamente->push(Medication::create(['nume' => 'Dolore', 'doza' => '782mg', 'descriere' => 'Totam distinctio itaque accusantium.']));
        $medicamente->push(Medication::create(['nume' => 'Eum', 'doza' => '706mg', 'descriere' => 'Commodi tempore minus similique veritatis dicta accusamus.']));
        $medicamente->push(Medication::create(['nume' => 'Magni', 'doza' => '284mg', 'descriere' => 'Fugiat delectus quasi officia libero incidunt fuga.']));
        $medicamente->push(Medication::create(['nume' => 'A', 'doza' => '607mg', 'descriere' => 'Perferendis consequuntur impedit molestiae deserunt assumenda harum.']));
        $medicamente->push(Medication::create(['nume' => 'Autem', 'doza' => '252mg', 'descriere' => 'Provident rerum vitae a eveniet fuga deleniti itaque.']));
        $medicamente->push(Medication::create(['nume' => 'Nemo', 'doza' => '837mg', 'descriere' => 'Molestias provident est provident amet.']));
        $medicamente->push(Medication::create(['nume' => 'Vel', 'doza' => '726mg', 'descriere' => 'Itaque cum facere ad sunt voluptatibus reprehenderit dolor.']));
        $medicamente->push(Medication::create(['nume' => 'Ullam', 'doza' => '754mg', 'descriere' => 'Delectus quidem dolore veniam corporis hic.']));
        $medicamente->push(Medication::create(['nume' => 'Nisi', 'doza' => '832mg', 'descriere' => 'Similique harum neque molestiae animi.']));
        $medicamente->push(Medication::create(['nume' => 'Sunt', 'doza' => '841mg', 'descriere' => 'Nobis officia sequi eos eius minus reprehenderit modi.']));
        $medicamente->push(Medication::create(['nume' => 'Similique', 'doza' => '903mg', 'descriere' => 'Quam neque dolore corrupti.']));
        $medicamente->push(Medication::create(['nume' => 'Eius', 'doza' => '864mg', 'descriere' => 'Incidunt nihil fugit vel aspernatur necessitatibus dolore.']));
        $medicamente->push(Medication::create(['nume' => 'Totam', 'doza' => '256mg', 'descriere' => 'Nesciunt suscipit sunt numquam in.']));
        $medicamente->push(Medication::create(['nume' => 'Deserunt', 'doza' => '472mg', 'descriere' => 'Repellat sint eum maiores repellat possimus necessitatibus.']));
        $medicamente->push(Medication::create(['nume' => 'Explicabo', 'doza' => '350mg', 'descriere' => 'Praesentium deleniti fuga reprehenderit.']));
        $medicamente->push(Medication::create(['nume' => 'Beatae', 'doza' => '318mg', 'descriere' => 'Quis saepe mollitia adipisci libero voluptas asperiores.']));
        $medicamente->push(Medication::create(['nume' => 'Maxime', 'doza' => '987mg', 'descriere' => 'Ullam illum aspernatur aliquid consequuntur minima ratione nulla.']));
        $medicamente->push(Medication::create(['nume' => 'Nihil', 'doza' => '216mg', 'descriere' => 'Porro quibusdam dolor est fugiat.']));
        $medicamente->push(Medication::create(['nume' => 'Accusamus', 'doza' => '105mg', 'descriere' => 'Eum quam quia neque quos.']));
        $medicamente->push(Medication::create(['nume' => 'Tenetur', 'doza' => '924mg', 'descriere' => 'Cumque minus natus vel nihil neque.']));
        $medicamente->push(Medication::create(['nume' => 'Accusantium', 'doza' => '139mg', 'descriere' => 'Aperiam provident doloribus excepturi ratione aliquid.']));
        $medicamente->push(Medication::create(['nume' => 'Sint', 'doza' => '328mg', 'descriere' => 'Velit aliquam rerum fugit.']));
        $medicamente->push(Medication::create(['nume' => 'Aut', 'doza' => '622mg', 'descriere' => 'Vitae eaque ab magni et consequatur eveniet.']));
        // Rețete și relații
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[117]->id,
            'details' => 'Accusantium possimus quisquam. Delectus quam molestias.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-05-22'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LXL-94631', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[117]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 03:19:38',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[33]->id,
            'details' => 'Distinctio rem dignissimos repudiandae. Laborum dolor delectus eveniet in laborum quas incidunt.',
            'issued_at' => '2025-05-02',
            'expires_at' => '2025-05-12'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JOM-61308', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[33]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 11:24:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[18]->id,
            'details' => 'Ab mollitia sequi quisquam esse. Asperiores tempora qui aut explicabo ab.',
            'issued_at' => '2025-03-27',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KtV-43923', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[18]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 03:41:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[34]->id,
            'patient_id' => $pacienti[168]->id,
            'details' => 'Fugiat sed ab. Quo nisi pariatur dolor corrupti corrupti.',
            'issued_at' => '2025-03-22',
            'expires_at' => '2025-03-30'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'kNQ-14200', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[168]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 22:11:28',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[20]->id,
            'details' => 'Quasi iure odit. Et eligendi veritatis illum tempore enim.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zyO-46482', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[20]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 14:15:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[75]->id,
            'details' => 'Aliquam animi culpa vero. Fugiat autem quo deserunt.',
            'issued_at' => '2025-05-06',
            'expires_at' => '2025-05-25'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wLP-76689', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[75]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 12:34:05',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[34]->id,
            'patient_id' => $pacienti[36]->id,
            'details' => 'Blanditiis labore placeat distinctio possimus dolorum.',
            'issued_at' => '2025-04-09',
            'expires_at' => '2025-04-13'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ldy-36686', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[36]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 01:06:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[150]->id,
            'details' => 'Neque quaerat non rem sunt. Velit enim voluptates eum temporibus rem.',
            'issued_at' => '2025-01-10',
            'expires_at' => '2025-01-13'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'riQ-53923', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[150]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 02:28:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[45]->id,
            'patient_id' => $pacienti[165]->id,
            'details' => 'Accusamus deserunt quas. Omnis vero porro nulla amet natus.',
            'issued_at' => '2025-03-19',
            'expires_at' => '2025-05-04'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'exY-99906', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[165]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 00:02:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[21]->id,
            'patient_id' => $pacienti[155]->id,
            'details' => 'Eius alias sunt accusantium. Deserunt tempore at earum doloremque quia.',
            'issued_at' => '2025-03-23',
            'expires_at' => '2025-04-27'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'DVf-88011', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[155]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 15:19:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[69]->id,
            'details' => 'Provident distinctio doloribus sequi nisi.',
            'issued_at' => '2025-05-06',
            'expires_at' => '2025-05-30'
        ]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FGD-64862', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[69]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 22:22:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[185]->id,
            'details' => 'Dolorem saepe totam dolorem nostrum esse. Excepturi consequatur maiores odit dolorum.',
            'issued_at' => '2025-03-22',
            'expires_at' => '2025-04-05'
        ]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ioF-13734', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[185]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 02:27:43',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[29]->id,
            'details' => 'Pariatur repellendus laborum ducimus cum. Expedita provident sunt voluptatibus.',
            'issued_at' => '2025-04-22',
            'expires_at' => '2025-05-13'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OzX-90100', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[29]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 22:21:45',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[35]->id,
            'patient_id' => $pacienti[171]->id,
            'details' => 'Maxime doloribus ullam rem ipsa illum sapiente. Quasi quae mollitia in.',
            'issued_at' => '2025-05-07',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'oQD-01887', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[171]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 05:13:38',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[17]->id,
            'details' => 'Voluptatum optio pariatur recusandae. Quas quis corrupti explicabo vero.',
            'issued_at' => '2025-01-26',
            'expires_at' => '2025-03-07'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Yvt-48292', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[17]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 08:38:42',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[35]->id,
            'patient_id' => $pacienti[71]->id,
            'details' => 'Consectetur earum tenetur quos. Maxime animi repellat maxime error. Perferendis sunt alias rem.',
            'issued_at' => '2025-01-05',
            'expires_at' => '2025-01-25'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cUr-96360', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[71]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 00:05:36',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[130]->id,
            'details' => 'Vitae ad quidem.',
            'issued_at' => '2025-04-29',
            'expires_at' => '2025-05-03'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'bts-00972', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[130]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 01:36:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[107]->id,
            'details' => 'Maiores dolorum earum quae repellat. Quis ad at numquam cum quaerat error.',
            'issued_at' => '2025-03-14',
            'expires_at' => '2025-05-02'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rgw-76703', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[107]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 11:19:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[58]->id,
            'details' => 'Quibusdam asperiores molestiae alias quisquam optio. Ipsa tenetur illum consequatur.',
            'issued_at' => '2025-04-05',
            'expires_at' => '2025-04-20'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gZW-07516', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[58]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 12:09:36',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[11]->id,
            'patient_id' => $pacienti[199]->id,
            'details' => 'Pariatur nobis maxime adipisci. Alias ad nulla consequatur.',
            'issued_at' => '2025-01-10',
            'expires_at' => '2025-05-25'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JaF-11577', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[199]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 23:24:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[48]->id,
            'details' => 'Nobis sequi soluta cum veritatis. Eaque dicta perspiciatis.',
            'issued_at' => '2025-02-14',
            'expires_at' => '2025-03-04'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ErQ-89911', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[48]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 18:05:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[62]->id,
            'details' => 'Ea ipsa quod tempore. Beatae qui magnam.',
            'issued_at' => '2025-02-07',
            'expires_at' => '2025-04-26'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'AhE-09805', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[62]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 15:32:53',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[106]->id,
            'details' => 'In dolorem quis recusandae quam eum aspernatur. Quasi quas aliquid beatae iste alias harum.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-05-17'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'dVF-40394', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[106]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 07:39:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[1]->id,
            'patient_id' => $pacienti[152]->id,
            'details' => 'Nisi facilis explicabo. Voluptas eius a provident accusamus.',
            'issued_at' => '2025-01-03',
            'expires_at' => '2025-03-22'
        ]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KEC-86214', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[152]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 04:44:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[125]->id,
            'details' => 'Ullam nulla veniam nulla adipisci at. Aliquid praesentium temporibus ex.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-04-25'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'HbH-46101', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[125]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 15:23:04',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[7]->id,
            'details' => 'Delectus quo rem tempora modi praesentium ratione.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-03-11'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FyM-99947', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[7]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 00:00:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[49]->id,
            'details' => 'Architecto autem vel pariatur distinctio.',
            'issued_at' => '2025-02-27',
            'expires_at' => '2025-03-02'
        ]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KCy-94456', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[49]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 07:36:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[20]->id,
            'details' => 'Provident veritatis non. Odit ea cum placeat placeat ad.',
            'issued_at' => '2025-04-12',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hRH-35829', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[20]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 13:40:05',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[176]->id,
            'details' => 'Nam sit nesciunt ut id.',
            'issued_at' => '2025-01-03',
            'expires_at' => '2025-02-28'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OZg-64097', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[176]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 13:45:05',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[82]->id,
            'details' => 'Necessitatibus totam voluptates nostrum necessitatibus modi quam.',
            'issued_at' => '2025-03-04',
            'expires_at' => '2025-03-19'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cec-32211', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[82]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 01:19:12',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[121]->id,
            'details' => 'Incidunt facere numquam id ullam dolorum. Sit totam laudantium ad voluptates eveniet fuga.',
            'issued_at' => '2025-01-21',
            'expires_at' => '2025-02-06'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Cvz-30038', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[121]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 08:51:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[21]->id,
            'patient_id' => $pacienti[70]->id,
            'details' => 'Architecto fugiat cum totam. Similique accusamus nostrum ipsum provident debitis magni.',
            'issued_at' => '2025-01-08',
            'expires_at' => '2025-05-19'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cel-71700', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[70]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 01:57:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[4]->id,
            'patient_id' => $pacienti[18]->id,
            'details' => 'Quos explicabo commodi. Officia incidunt libero modi optio.',
            'issued_at' => '2025-02-08',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'dSt-52457', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[18]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 08:12:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[41]->id,
            'patient_id' => $pacienti[137]->id,
            'details' => 'Amet impedit possimus iste magnam placeat. Numquam pariatur veritatis alias magnam doloremque.',
            'issued_at' => '2025-03-25',
            'expires_at' => '2025-05-10'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'csH-83992', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[137]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 11:27:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[180]->id,
            'details' => 'Quis maxime ullam veritatis neque explicabo. Hic corporis voluptas iusto velit.',
            'issued_at' => '2025-05-04',
            'expires_at' => '2025-05-27'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'sNq-96595', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[180]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 05:16:02',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[49]->id,
            'patient_id' => $pacienti[191]->id,
            'details' => 'Itaque expedita totam quam dicta sed sapiente debitis.',
            'issued_at' => '2025-02-04',
            'expires_at' => '2025-02-22'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'pGx-25844', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[191]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 14:11:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[180]->id,
            'details' => 'Suscipit ex harum.',
            'issued_at' => '2025-01-19',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Gav-31772', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[180]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 23:53:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[35]->id,
            'patient_id' => $pacienti[115]->id,
            'details' => 'Neque autem earum amet occaecati explicabo perferendis. Illo a nisi.',
            'issued_at' => '2025-05-08',
            'expires_at' => '2025-05-25'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'tSs-90167', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[115]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 18:53:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[158]->id,
            'details' => 'Quisquam culpa voluptatum ea odio nam ex. Facere veritatis libero placeat quaerat quasi ex.',
            'issued_at' => '2025-04-10',
            'expires_at' => '2025-05-28'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cAs-46912', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[158]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 18:03:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[100]->id,
            'details' => 'At iusto minima a repellendus ab.',
            'issued_at' => '2025-03-22',
            'expires_at' => '2025-04-06'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KvY-54225', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[100]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 02:29:47',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[38]->id,
            'details' => 'Amet odit incidunt hic. Nisi sequi explicabo minima.',
            'issued_at' => '2025-01-24',
            'expires_at' => '2025-02-11'
        ]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'tcN-16747', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[38]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 12:33:42',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[41]->id,
            'patient_id' => $pacienti[68]->id,
            'details' => 'Sint soluta corrupti quisquam harum magnam. Fugiat adipisci porro accusamus.',
            'issued_at' => '2025-03-25',
            'expires_at' => '2025-05-18'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'CtZ-47092', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[68]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 01:16:31',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[124]->id,
            'details' => 'Deserunt iste temporibus. Quasi natus atque modi.',
            'issued_at' => '2025-03-24',
            'expires_at' => '2025-06-01'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BCF-69736', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[124]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 20:20:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[38]->id,
            'patient_id' => $pacienti[55]->id,
            'details' => 'Dolor deleniti error velit perspiciatis repellendus. Mollitia autem odit.',
            'issued_at' => '2025-03-09',
            'expires_at' => '2025-04-12'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'dAX-25297', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[55]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 01:21:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[177]->id,
            'details' => 'Debitis quos animi sint dicta dicta maxime modi.',
            'issued_at' => '2025-02-26',
            'expires_at' => '2025-03-17'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BSv-34817', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[177]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 10:45:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[23]->id,
            'details' => 'Odio neque vitae laudantium. Asperiores quo culpa modi.',
            'issued_at' => '2025-01-09',
            'expires_at' => '2025-06-03'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jpg-13559', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[23]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 18:00:58',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[108]->id,
            'details' => 'Dolorum laudantium est incidunt consectetur. Sunt nobis hic sequi nostrum iste reprehenderit.',
            'issued_at' => '2025-05-08',
            'expires_at' => '2025-05-26'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'aET-97342', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[108]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 21:29:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[0]->id,
            'details' => 'Amet sequi nostrum enim. Ratione autem molestias numquam placeat odit quibusdam.',
            'issued_at' => '2025-02-08',
            'expires_at' => '2025-02-17'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'YZq-25484', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[0]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 03:33:12',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[45]->id,
            'patient_id' => $pacienti[186]->id,
            'details' => 'Facere consectetur odit illo. Repellat assumenda iste doloremque possimus voluptatem.',
            'issued_at' => '2025-01-24',
            'expires_at' => '2025-04-06'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'EXs-94570', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[186]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 03:37:28',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[42]->id,
            'patient_id' => $pacienti[112]->id,
            'details' => 'Impedit a possimus dolor. Cumque odit aspernatur sit rem. Nulla voluptatum asperiores cumque quos.',
            'issued_at' => '2025-03-26',
            'expires_at' => '2025-04-19'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FlN-93053', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[112]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 08:09:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[179]->id,
            'details' => 'Similique ipsam quae eos cum soluta.',
            'issued_at' => '2025-02-04',
            'expires_at' => '2025-03-01'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SJD-59597', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[179]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 14:54:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[62]->id,
            'details' => 'Et repellendus placeat atque in minima. Hic natus eligendi deleniti debitis ea non saepe.',
            'issued_at' => '2025-03-16',
            'expires_at' => '2025-04-21'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BAr-42742', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[62]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 21:34:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[28]->id,
            'patient_id' => $pacienti[91]->id,
            'details' => 'Possimus amet temporibus voluptatum id.',
            'issued_at' => '2025-04-27',
            'expires_at' => '2025-05-29'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Khv-03922', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[91]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 06:25:50',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[160]->id,
            'details' => 'Aut itaque pariatur id deserunt deserunt. Assumenda quaerat aperiam sunt saepe.',
            'issued_at' => '2025-01-24',
            'expires_at' => '2025-04-12'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'EOY-98361', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[160]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 15:42:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[11]->id,
            'details' => 'Nostrum molestias deserunt quisquam.',
            'issued_at' => '2025-03-31',
            'expires_at' => '2025-04-15'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'NPQ-40325', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[11]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 18:59:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[15]->id,
            'details' => 'Fugit quae occaecati quidem voluptatibus nostrum facere repellat. Dolores quod praesentium.',
            'issued_at' => '2025-05-01',
            'expires_at' => '2025-05-06'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'EmO-47489', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[15]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 20:00:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[15]->id,
            'details' => 'Eos saepe dolore laboriosam. Sequi eius tempora nesciunt.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-04-10'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'EBV-02411', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[15]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 15:10:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[198]->id,
            'details' => 'Repellendus expedita et adipisci ducimus.',
            'issued_at' => '2025-02-28',
            'expires_at' => '2025-03-21'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'WxF-07386', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[198]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 06:08:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[1]->id,
            'patient_id' => $pacienti[58]->id,
            'details' => 'Neque at debitis error. Provident omnis incidunt dolorem eum dolores nostrum magnam.',
            'issued_at' => '2025-04-20',
            'expires_at' => '2025-05-30'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Xlr-77687', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[58]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 09:22:15',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[80]->id,
            'details' => 'Deleniti tempora eaque vitae cumque. Quibusdam officia ex quam.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-05-15'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Dai-96069', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[80]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 18:38:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[127]->id,
            'details' => 'Perspiciatis pariatur suscipit sequi cum. Quos ex mollitia nostrum.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-06-08'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qWE-88193', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[127]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 07:06:12',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[77]->id,
            'details' => 'Fugit aliquam libero dolorum qui cumque. Vero saepe similique. Debitis quam debitis impedit.',
            'issued_at' => '2025-01-30',
            'expires_at' => '2025-02-04'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'joM-28902', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[77]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 16:05:47',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[41]->id,
            'patient_id' => $pacienti[38]->id,
            'details' => 'Quos cum laudantium expedita perferendis maiores.',
            'issued_at' => '2025-05-02',
            'expires_at' => '2025-05-19'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qiG-61666', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[38]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 16:42:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[14]->id,
            'patient_id' => $pacienti[139]->id,
            'details' => 'Accusamus incidunt nemo rem. Repellendus blanditiis incidunt voluptas.',
            'issued_at' => '2025-03-14',
            'expires_at' => '2025-04-02'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OfC-26633', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[139]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 09:16:00',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[13]->id,
            'patient_id' => $pacienti[165]->id,
            'details' => 'Eaque non itaque ratione modi ab tempore. Possimus magni enim eos alias eius.',
            'issued_at' => '2025-04-10',
            'expires_at' => '2025-04-12'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Hua-86406', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[165]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 02:32:01',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[145]->id,
            'details' => 'Modi ab cupiditate rerum eos eaque. Tempora numquam laboriosam pariatur facere voluptate.',
            'issued_at' => '2025-01-01',
            'expires_at' => '2025-02-06'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JqR-17439', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[145]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 18:10:16',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[28]->id,
            'patient_id' => $pacienti[178]->id,
            'details' => 'Molestias earum at modi modi maxime. Voluptatum cum provident laborum.',
            'issued_at' => '2025-04-06',
            'expires_at' => '2025-04-19'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gcP-97246', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[178]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 16:34:21',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[46]->id,
            'patient_id' => $pacienti[182]->id,
            'details' => 'Alias vel dignissimos corporis. Dolores doloremque nemo ratione. Atque quos dolores esse.',
            'issued_at' => '2025-02-14',
            'expires_at' => '2025-02-20'
        ]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SnW-71899', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[182]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 20:24:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[21]->id,
            'patient_id' => $pacienti[102]->id,
            'details' => 'Unde ipsam numquam odio aliquid culpa. Harum saepe voluptas facilis ex rem doloremque.',
            'issued_at' => '2025-04-26',
            'expires_at' => '2025-05-04'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'opl-33000', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[102]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 12:14:21',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[15]->id,
            'details' => 'Repellendus architecto labore. Sapiente at eaque incidunt. Unde officia provident.',
            'issued_at' => '2025-02-14',
            'expires_at' => '2025-05-05'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Ewq-86526', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[15]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 13:19:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[13]->id,
            'details' => 'Nam fugiat aut animi ullam. Repellat harum minima dolor.',
            'issued_at' => '2025-03-22',
            'expires_at' => '2025-03-25'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'etJ-68959', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[13]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 13:17:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[27]->id,
            'details' => 'Dolorum deserunt temporibus culpa necessitatibus. Excepturi autem consectetur ipsa.',
            'issued_at' => '2025-03-08',
            'expires_at' => '2025-03-10'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JJw-95805', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[27]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 00:52:38',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[68]->id,
            'details' => 'Ipsum sequi dolor minima non fugit. Debitis voluptatem non reprehenderit qui similique.',
            'issued_at' => '2025-03-26',
            'expires_at' => '2025-04-24'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'eZe-83789', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[68]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 22:41:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[175]->id,
            'details' => 'Amet doloribus quidem corrupti cumque aspernatur explicabo. Libero recusandae veniam.',
            'issued_at' => '2025-04-28',
            'expires_at' => '2025-05-03'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'mlg-67995', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[175]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 15:58:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[151]->id,
            'details' => 'Porro veniam eius cum. Voluptatum id velit dignissimos magnam similique.',
            'issued_at' => '2025-04-10',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Oxn-66544', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[151]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 21:28:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[49]->id,
            'patient_id' => $pacienti[182]->id,
            'details' => 'Itaque adipisci cumque sequi eius consequatur. Doloremque ipsum et incidunt.',
            'issued_at' => '2025-01-12',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'RvR-54959', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[182]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 00:23:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[61]->id,
            'details' => 'Rem voluptates dolor ducimus quibusdam. Laudantium minus voluptatum voluptatibus exercitationem.',
            'issued_at' => '2025-02-25',
            'expires_at' => '2025-04-01'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KjY-69366', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[61]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 11:01:53',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[183]->id,
            'details' => 'Praesentium enim error. Architecto magnam quam sed.',
            'issued_at' => '2025-01-01',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Bnh-10473', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[183]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 08:34:39',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[66]->id,
            'details' => 'Ratione nulla dolorem quo placeat pariatur vero. Dicta quia ratione laboriosam cum.',
            'issued_at' => '2025-01-02',
            'expires_at' => '2025-02-12'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OiL-71940', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[66]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 14:16:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[55]->id,
            'details' => 'Officia eos odio id sint voluptatum iste. Officia impedit aliquam ad.',
            'issued_at' => '2025-01-09',
            'expires_at' => '2025-05-07'
        ]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'DMX-10290', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[55]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 08:25:43',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[154]->id,
            'details' => 'Rem eum dignissimos nobis dicta.',
            'issued_at' => '2025-03-14',
            'expires_at' => '2025-04-08'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'pDp-21331', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[154]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 14:23:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[193]->id,
            'details' => 'Ratione molestias aliquid earum non tempore. Magnam sit commodi maxime maiores maiores esse ab.',
            'issued_at' => '2025-02-26',
            'expires_at' => '2025-03-29'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'CiS-29355', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[193]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 03:27:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[41]->id,
            'patient_id' => $pacienti[129]->id,
            'details' => 'Possimus distinctio quisquam molestiae. Unde nemo nam soluta.',
            'issued_at' => '2025-01-13',
            'expires_at' => '2025-04-23'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Zdl-05943', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[129]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 11:59:37',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[42]->id,
            'patient_id' => $pacienti[123]->id,
            'details' => 'Sunt doloremque soluta voluptatem explicabo. Maiores minima quo sint deserunt dolores nisi ipsam.',
            'issued_at' => '2025-04-27',
            'expires_at' => '2025-05-11'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qph-56806', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[123]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 05:17:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[88]->id,
            'details' => 'Aliquam non dolore deleniti. Sit cupiditate voluptatum totam animi laborum.',
            'issued_at' => '2025-03-29',
            'expires_at' => '2025-05-16'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'viB-65992', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[88]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 05:33:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[25]->id,
            'patient_id' => $pacienti[105]->id,
            'details' => 'Quam dolores vel distinctio recusandae. Consequatur nisi laboriosam impedit.',
            'issued_at' => '2025-03-01',
            'expires_at' => '2025-03-27'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Mcg-16940', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[105]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 08:03:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[86]->id,
            'details' => 'Tenetur provident voluptatum esse illum enim. Odit libero magnam.',
            'issued_at' => '2025-04-29',
            'expires_at' => '2025-05-10'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FKb-35302', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[86]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 00:03:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[127]->id,
            'details' => 'Quis pariatur molestias ducimus a.',
            'issued_at' => '2025-01-17',
            'expires_at' => '2025-04-19'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Yvl-79932', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[127]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 04:33:52',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[167]->id,
            'details' => 'Ea dolorum deserunt laudantium voluptatum ab. Itaque iste eum dolor.',
            'issued_at' => '2025-02-23',
            'expires_at' => '2025-03-02'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jcX-22124', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[167]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 22:43:37',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[9]->id,
            'details' => 'Illum totam provident itaque. Voluptates iste repellat at sint.',
            'issued_at' => '2025-03-31',
            'expires_at' => '2025-04-03'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'IhQ-57792', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[9]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 19:00:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[27]->id,
            'details' => 'Id magni libero recusandae officiis. Nobis illum accusamus facere.',
            'issued_at' => '2025-04-07',
            'expires_at' => '2025-05-26'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qqH-50956', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[27]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 21:39:12',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[8]->id,
            'details' => 'Commodi exercitationem labore id voluptate expedita. Voluptate earum blanditiis ea.',
            'issued_at' => '2025-03-15',
            'expires_at' => '2025-06-03'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FmQ-62428', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[8]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 20:49:56',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[17]->id,
            'details' => 'Dolores et aspernatur saepe. Similique sit soluta commodi alias et.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-05-27'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rjp-41649', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[17]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 10:23:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[25]->id,
            'patient_id' => $pacienti[48]->id,
            'details' => 'Aliquam animi officia doloribus iste. Incidunt laborum quo excepturi dolore exercitationem.',
            'issued_at' => '2025-03-09',
            'expires_at' => '2025-05-04'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SUF-31524', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[48]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 00:52:11',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[130]->id,
            'details' => 'Nostrum neque a nesciunt minus. Error libero dicta fugiat voluptate dolorem labore.',
            'issued_at' => '2025-03-03',
            'expires_at' => '2025-04-19'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LoA-44174', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[130]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 08:01:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[71]->id,
            'details' => 'Ratione earum cumque. Expedita nesciunt eum ipsa placeat sed aut distinctio.',
            'issued_at' => '2025-04-22',
            'expires_at' => '2025-05-11'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hIe-03951', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[71]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 17:21:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[46]->id,
            'patient_id' => $pacienti[69]->id,
            'details' => 'A perspiciatis perferendis recusandae enim dolorum occaecati vitae.',
            'issued_at' => '2025-04-05',
            'expires_at' => '2025-04-12'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ZIh-69731', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[69]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 20:09:42',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[29]->id,
            'details' => 'Placeat ducimus sed voluptate. Porro voluptatum magnam eveniet nesciunt sunt.',
            'issued_at' => '2025-04-14',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BUS-11502', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[29]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 14:01:31',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[133]->id,
            'details' => 'Neque aut fugiat. Tempore dolorum exercitationem et ipsum.',
            'issued_at' => '2025-05-04',
            'expires_at' => '2025-05-14'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'GPL-03636', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[133]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 02:39:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[102]->id,
            'details' => 'Sunt fuga nobis. Consectetur doloremque fugit natus cum.',
            'issued_at' => '2025-03-02',
            'expires_at' => '2025-03-25'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'byk-16411', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[102]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 18:42:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[118]->id,
            'details' => 'Assumenda mollitia quidem beatae veritatis.',
            'issued_at' => '2025-04-16',
            'expires_at' => '2025-04-21'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'dWq-70749', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[118]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 16:39:59',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[9]->id,
            'patient_id' => $pacienti[154]->id,
            'details' => 'Vitae ipsa provident minus. Nostrum autem id velit praesentium voluptatibus omnis.',
            'issued_at' => '2025-01-16',
            'expires_at' => '2025-03-29'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KIs-54336', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[154]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 07:56:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[25]->id,
            'patient_id' => $pacienti[194]->id,
            'details' => 'Ab quae quasi vel repellat libero culpa. Ad nisi ratione. Consequatur ipsa deleniti.',
            'issued_at' => '2025-04-16',
            'expires_at' => '2025-05-13'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yVe-97332', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[194]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 04:05:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[74]->id,
            'details' => 'Officia quae ut soluta harum eligendi. Laborum ex quasi eius expedita vitae.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-02-21'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SGq-96548', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[74]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 17:25:53',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[184]->id,
            'details' => 'Fugiat tempore harum nobis corrupti voluptatem. Ea eveniet qui sed animi adipisci.',
            'issued_at' => '2025-02-21',
            'expires_at' => '2025-02-28'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rZL-92792', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[184]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 22:20:07',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[28]->id,
            'patient_id' => $pacienti[82]->id,
            'details' => 'Quo impedit aliquam iure iste quaerat esse. Iste enim amet eos quos facere numquam ad.',
            'issued_at' => '2025-04-18',
            'expires_at' => '2025-05-18'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Vzu-31353', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[82]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 23:40:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[42]->id,
            'patient_id' => $pacienti[74]->id,
            'details' => 'Ad enim soluta sunt architecto quod. Provident rem eaque quos et mollitia. Vel facilis asperiores.',
            'issued_at' => '2025-02-22',
            'expires_at' => '2025-04-30'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hzW-32936', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[74]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 09:55:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[21]->id,
            'details' => 'Eum error maiores id nostrum voluptate maxime. Illo nam occaecati ea.',
            'issued_at' => '2025-01-20',
            'expires_at' => '2025-05-09'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'xTK-60712', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[21]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 18:16:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[65]->id,
            'details' => 'Dolorem vero autem eum nisi tempora voluptatem. Occaecati tempora numquam nemo.',
            'issued_at' => '2025-02-03',
            'expires_at' => '2025-04-18'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'iOH-91979', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[65]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 02:22:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[64]->id,
            'details' => 'Temporibus velit iusto. Porro veniam qui excepturi culpa molestiae corporis.',
            'issued_at' => '2025-02-09',
            'expires_at' => '2025-04-01'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'bst-15972', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[64]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 18:54:17',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[106]->id,
            'details' => 'Odit ab repellat et. Nihil vitae sed ad porro.',
            'issued_at' => '2025-02-16',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'lLf-64602', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[106]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 05:17:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[3]->id,
            'details' => 'Delectus molestias repellat aperiam itaque at. Nemo sequi nesciunt dicta. Laborum est excepturi.',
            'issued_at' => '2025-01-06',
            'expires_at' => '2025-04-08'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'POv-81657', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[3]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:41:43',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[38]->id,
            'patient_id' => $pacienti[35]->id,
            'details' => 'Eveniet nam dolores nam. Libero earum hic at temporibus laborum.',
            'issued_at' => '2025-03-27',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'CPR-34437', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[35]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 19:09:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[28]->id,
            'details' => 'Commodi esse cupiditate ea modi alias nulla omnis. Ipsam repudiandae voluptate nam possimus.',
            'issued_at' => '2025-05-04',
            'expires_at' => '2025-05-27'
        ]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'AQJ-68761', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[28]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 09:34:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[40]->id,
            'details' => 'Praesentium illo labore necessitatibus nesciunt. Tempora hic ipsa voluptas odit inventore iure.',
            'issued_at' => '2025-02-28',
            'expires_at' => '2025-03-29'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jvY-34973', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[40]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 17:44:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[132]->id,
            'details' => 'Asperiores eius a nesciunt dolorum cumque. Perspiciatis repudiandae tempore nemo et.',
            'issued_at' => '2025-01-03',
            'expires_at' => '2025-03-08'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jMt-32724', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[132]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 21:04:31',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[173]->id,
            'details' => 'Quis iusto incidunt ea veritatis iure. Provident cumque qui eaque.',
            'issued_at' => '2025-02-11',
            'expires_at' => '2025-04-14'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ATz-45054', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[173]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 12:22:28',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[15]->id,
            'patient_id' => $pacienti[175]->id,
            'details' => 'Ad commodi assumenda nisi esse autem eos. Alias laborum id occaecati optio fugiat.',
            'issued_at' => '2025-02-27',
            'expires_at' => '2025-05-14'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Idm-54479', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[175]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 15:52:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[38]->id,
            'patient_id' => $pacienti[29]->id,
            'details' => 'Consectetur voluptate rerum quod eveniet consequatur sit saepe. Repellat rerum excepturi non aut.',
            'issued_at' => '2025-04-23',
            'expires_at' => '2025-05-28'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'tfh-36874', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[29]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 03:37:56',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[198]->id,
            'details' => 'Vero similique hic cupiditate. Dignissimos quos itaque.',
            'issued_at' => '2025-02-23',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Rgf-09397', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[198]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 18:51:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[9]->id,
            'patient_id' => $pacienti[7]->id,
            'details' => 'Vitae soluta consectetur.',
            'issued_at' => '2025-01-13',
            'expires_at' => '2025-05-01'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'DWR-55646', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[7]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 21:09:22',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[73]->id,
            'details' => 'Sunt odit eaque molestias distinctio. Voluptate placeat facere blanditiis autem.',
            'issued_at' => '2025-05-08',
            'expires_at' => '2025-05-31'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'fut-00554', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[73]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 13:31:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[18]->id,
            'patient_id' => $pacienti[125]->id,
            'details' => 'Cum vero non enim reiciendis. Officiis quibusdam cumque dolorem quod.',
            'issued_at' => '2025-01-23',
            'expires_at' => '2025-04-23'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'IUW-94049', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[125]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 06:11:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[11]->id,
            'patient_id' => $pacienti[32]->id,
            'details' => 'Sit tempora vero dignissimos.',
            'issued_at' => '2025-04-10',
            'expires_at' => '2025-04-29'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Rcf-96795', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[32]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 23:01:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[25]->id,
            'patient_id' => $pacienti[178]->id,
            'details' => 'Corrupti consequatur ea. Vero dolores maxime doloribus dicta neque.',
            'issued_at' => '2025-04-09',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gNh-92994', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[178]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 00:21:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[164]->id,
            'details' => 'Atque quod blanditiis aliquam quia molestiae vitae doloribus. Hic maiores quia dolor.',
            'issued_at' => '2025-04-25',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'lKU-40642', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[164]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 00:06:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[38]->id,
            'patient_id' => $pacienti[181]->id,
            'details' => 'Mollitia pariatur fuga assumenda corrupti cumque. Tempora fugiat dolor illum.',
            'issued_at' => '2025-01-28',
            'expires_at' => '2025-05-01'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'QJg-88529', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[181]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 21:18:16',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[99]->id,
            'details' => 'Qui cumque voluptates quam deserunt quas. Eveniet nostrum quis sit.',
            'issued_at' => '2025-03-27',
            'expires_at' => '2025-05-11'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Hhf-54986', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[99]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 05:30:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[62]->id,
            'details' => 'Ad nesciunt dolore animi voluptate magni. Quia delectus aperiam iste magni eligendi quae.',
            'issued_at' => '2025-02-18',
            'expires_at' => '2025-04-18'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qOR-96079', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[62]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:00:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[40]->id,
            'patient_id' => $pacienti[83]->id,
            'details' => 'Nisi nobis harum at.
Similique aut dolorum quam. Accusantium quidem ad esse. Et iure autem aperiam.',
            'issued_at' => '2025-04-18',
            'expires_at' => '2025-05-29'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gWe-12535', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[83]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 22:52:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[77]->id,
            'details' => 'Sunt commodi sunt ipsa saepe ea. Tempore adipisci id eligendi modi praesentium.',
            'issued_at' => '2025-01-06',
            'expires_at' => '2025-02-10'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'vZJ-40551', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[77]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 07:14:46',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[38]->id,
            'details' => 'Veniam eaque reprehenderit soluta eum. Unde natus nam culpa.',
            'issued_at' => '2025-04-14',
            'expires_at' => '2025-04-27'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'HIX-13920', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[38]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 22:10:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[14]->id,
            'patient_id' => $pacienti[110]->id,
            'details' => 'Earum porro placeat eum eaque. Et tempora occaecati ea animi voluptatum a dignissimos.',
            'issued_at' => '2025-02-11',
            'expires_at' => '2025-03-23'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'pZt-30837', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[110]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 09:07:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[20]->id,
            'details' => 'Vitae consectetur magnam placeat harum expedita. Voluptate fugiat quidem maxime accusantium.',
            'issued_at' => '2025-03-27',
            'expires_at' => '2025-04-25'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'QxS-92996', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[20]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 16:14:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[22]->id,
            'details' => 'Consectetur magnam laborum facilis ut minus pariatur. Error sequi architecto exercitationem.',
            'issued_at' => '2025-05-05',
            'expires_at' => '2025-05-06'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'YMM-97412', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[22]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 13:08:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[71]->id,
            'details' => 'Sit voluptate libero hic libero.',
            'issued_at' => '2025-02-25',
            'expires_at' => '2025-04-04'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LQu-25392', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[71]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 02:41:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[16]->id,
            'details' => 'Ut officiis nesciunt pariatur.',
            'issued_at' => '2025-05-01',
            'expires_at' => '2025-05-05'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JsF-24840', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[16]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 22:13:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[53]->id,
            'details' => 'Rem quasi rerum beatae. Pariatur mollitia dolorem impedit odio minima.
Iure quam adipisci.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-05-03'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'xdk-08468', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[53]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 02:19:59',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[74]->id,
            'details' => 'Quos cupiditate vel aliquam ullam commodi inventore. Fugit iste mollitia minus.',
            'issued_at' => '2025-04-06',
            'expires_at' => '2025-04-24'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ClO-90092', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[74]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 18:42:41',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[169]->id,
            'details' => 'Rem non molestiae ipsum. Nobis repudiandae reiciendis eaque in eum.',
            'issued_at' => '2025-05-03',
            'expires_at' => '2025-05-09'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Egy-34961', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[169]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 20:41:01',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[179]->id,
            'details' => 'Quos hic quo debitis. Incidunt officiis laboriosam ipsa ex.',
            'issued_at' => '2025-02-21',
            'expires_at' => '2025-05-02'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'CTx-43556', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[179]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 16:04:01',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[45]->id,
            'patient_id' => $pacienti[164]->id,
            'details' => 'Maiores cum nobis similique laborum. Nulla beatae nam distinctio commodi explicabo.',
            'issued_at' => '2025-01-15',
            'expires_at' => '2025-02-06'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KUH-28643', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[164]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 16:22:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[22]->id,
            'patient_id' => $pacienti[102]->id,
            'details' => 'Molestiae cumque quos. Ab rerum velit ab tempore.',
            'issued_at' => '2025-04-02',
            'expires_at' => '2025-04-20'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'QEs-90934', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[102]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 07:54:12',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[31]->id,
            'details' => 'Porro vel sunt hic. Odio pariatur tenetur sit perferendis natus deleniti.',
            'issued_at' => '2025-02-11',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hiZ-57956', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[31]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 22:01:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[85]->id,
            'details' => 'Impedit sint omnis maiores culpa. Ratione ex debitis similique facilis molestias.',
            'issued_at' => '2025-01-23',
            'expires_at' => '2025-06-07'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jgY-21349', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[85]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 07:00:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[4]->id,
            'patient_id' => $pacienti[88]->id,
            'details' => 'Laudantium exercitationem hic minus. Harum itaque inventore totam laudantium.',
            'issued_at' => '2025-05-09',
            'expires_at' => '2025-05-22'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'NXo-76962', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[88]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 08:49:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[19]->id,
            'details' => 'Suscipit culpa ullam fuga accusamus. Cumque numquam optio est totam.',
            'issued_at' => '2025-01-31',
            'expires_at' => '2025-02-19'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wxY-87512', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[19]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 17:02:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[36]->id,
            'details' => 'Suscipit provident dolores nisi temporibus iste. Laudantium aut est deserunt.',
            'issued_at' => '2025-02-20',
            'expires_at' => '2025-04-06'
        ]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'WjT-31582', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[36]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 01:18:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[182]->id,
            'details' => 'Recusandae pariatur quis non laudantium adipisci sed.',
            'issued_at' => '2025-01-08',
            'expires_at' => '2025-05-20'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yGk-78462', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[182]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 08:21:32',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[105]->id,
            'details' => 'Aperiam cumque nemo magni eius. Voluptate praesentium ad quisquam officia quo.',
            'issued_at' => '2025-02-16',
            'expires_at' => '2025-02-20'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OGw-06573', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[105]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 23:39:56',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[54]->id,
            'details' => 'Ullam pariatur nam nobis consequuntur culpa qui. Nam ea ex magnam officia cum veritatis iusto.',
            'issued_at' => '2025-03-18',
            'expires_at' => '2025-03-30'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zqD-28949', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[54]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 20:03:30',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[107]->id,
            'details' => 'Debitis cum eos architecto iure autem. Corrupti deleniti id minima.',
            'issued_at' => '2025-01-07',
            'expires_at' => '2025-04-11'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'mvu-58161', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[107]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 16:59:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[89]->id,
            'details' => 'Perferendis aliquid libero animi. Eius cum autem ipsum.',
            'issued_at' => '2025-01-27',
            'expires_at' => '2025-02-07'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LOM-93363', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[89]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 22:15:11',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[72]->id,
            'details' => 'Eos id delectus dolorem. Labore consequatur optio excepturi eos temporibus dolores.',
            'issued_at' => '2025-03-09',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'iIj-27722', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[72]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 01:19:58',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[160]->id,
            'details' => 'Pariatur corporis fuga enim.',
            'issued_at' => '2025-04-18',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'lDc-76134', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[160]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 10:05:40',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[81]->id,
            'details' => 'Nam maxime ab minus id ullam rem possimus. A architecto a ratione. Incidunt quod tenetur accusamus.',
            'issued_at' => '2025-03-14',
            'expires_at' => '2025-06-01'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Mwf-12917', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[81]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 04:20:29',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[13]->id,
            'patient_id' => $pacienti[72]->id,
            'details' => 'Sequi quod eum alias voluptatibus. Provident quae labore cum.',
            'issued_at' => '2025-03-15',
            'expires_at' => '2025-03-30'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'YJC-75964', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[72]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 07:54:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[180]->id,
            'details' => 'Placeat explicabo odio nesciunt ullam amet quo. Sed magnam amet eius modi.',
            'issued_at' => '2025-02-15',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'xbk-15131', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[180]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 06:43:21',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[185]->id,
            'details' => 'Reiciendis cupiditate id sequi culpa optio ad. Doloribus magnam distinctio.',
            'issued_at' => '2025-02-25',
            'expires_at' => '2025-05-04'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'YcW-18594', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[185]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 14:38:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[68]->id,
            'details' => 'Nesciunt possimus molestiae vel. Commodi repudiandae sint dolorum suscipit iusto et.',
            'issued_at' => '2025-05-02',
            'expires_at' => '2025-05-12'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gHa-62124', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[68]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 14:57:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[37]->id,
            'details' => 'Esse totam alias repudiandae placeat earum doloribus. Fuga occaecati iusto eum ad deleniti ea.',
            'issued_at' => '2025-03-23',
            'expires_at' => '2025-04-17'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'pug-61958', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[37]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 02:30:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[169]->id,
            'details' => 'Minima recusandae dignissimos voluptatem. Eveniet numquam itaque sapiente totam.',
            'issued_at' => '2025-03-20',
            'expires_at' => '2025-05-29'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BTr-51729', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[169]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 00:47:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[119]->id,
            'details' => 'Reiciendis porro enim accusamus commodi dolor. Inventore aliquid perferendis quo.',
            'issued_at' => '2025-02-02',
            'expires_at' => '2025-04-12'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ouc-61010', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[119]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 12:32:15',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[38]->id,
            'details' => 'Nemo ea non sapiente. Sunt perspiciatis quod.',
            'issued_at' => '2025-01-08',
            'expires_at' => '2025-03-21'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ifI-50950', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[38]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 13:37:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[33]->id,
            'details' => 'Deserunt eius necessitatibus quam ratione. Sit ex sint.',
            'issued_at' => '2025-04-25',
            'expires_at' => '2025-05-28'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Kzc-25688', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[33]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 20:10:46',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[44]->id,
            'details' => 'Corporis nam animi voluptatibus nihil non sapiente labore. Amet eum corporis.',
            'issued_at' => '2025-01-15',
            'expires_at' => '2025-03-26'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yNX-80269', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[44]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 12:17:21',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[90]->id,
            'details' => 'Voluptas est fugit odit corrupti at. Enim non aperiam saepe veniam odit omnis veniam.',
            'issued_at' => '2025-03-13',
            'expires_at' => '2025-04-17'
        ]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'StX-88441', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[90]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 00:27:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[109]->id,
            'details' => 'Corporis deleniti corporis doloremque rem.',
            'issued_at' => '2025-04-02',
            'expires_at' => '2025-05-13'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'XgO-52642', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[109]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 14:42:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[172]->id,
            'details' => 'Incidunt assumenda similique. Molestiae excepturi qui nam accusamus aliquid.',
            'issued_at' => '2025-04-04',
            'expires_at' => '2025-05-26'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'pai-61684', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[172]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 07:55:11',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[21]->id,
            'details' => 'Cupiditate minima numquam enim minus autem repellendus. Sit sunt odio.',
            'issued_at' => '2025-04-08',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'vWR-64108', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[21]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 03:42:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[35]->id,
            'details' => 'Repellat eligendi ex tenetur porro et repellat.',
            'issued_at' => '2025-02-06',
            'expires_at' => '2025-02-11'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Stq-16173', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[35]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 20:18:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[147]->id,
            'details' => 'Omnis vero ipsum. Aperiam voluptatem velit quo expedita tempore et.',
            'issued_at' => '2025-01-20',
            'expires_at' => '2025-02-11'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'nWB-48726', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[147]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 14:58:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[48]->id,
            'patient_id' => $pacienti[135]->id,
            'details' => 'Nesciunt possimus itaque libero ipsum iure voluptate.',
            'issued_at' => '2025-04-11',
            'expires_at' => '2025-05-10'
        ]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'CES-72606', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[135]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 20:42:19',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[18]->id,
            'patient_id' => $pacienti[81]->id,
            'details' => 'Id dicta quae harum dignissimos quidem. Distinctio laboriosam placeat maiores fugiat.',
            'issued_at' => '2025-02-02',
            'expires_at' => '2025-02-04'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Rqp-86123', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[81]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:52:52',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[136]->id,
            'details' => 'Autem ipsam tempore ducimus eos aliquam at. Eum nihil veritatis.',
            'issued_at' => '2025-04-12',
            'expires_at' => '2025-05-23'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yOM-43703', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[136]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 22:17:17',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[14]->id,
            'patient_id' => $pacienti[160]->id,
            'details' => 'Tempora molestiae eos ad. Ipsa veritatis atque neque rem vitae.',
            'issued_at' => '2025-03-27',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'MCt-60133', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[160]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 18:40:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[132]->id,
            'details' => 'Tempora placeat occaecati placeat.
Et modi fugiat deleniti excepturi temporibus minus.',
            'issued_at' => '2025-01-09',
            'expires_at' => '2025-03-02'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'VkD-57757', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[132]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 13:37:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[51]->id,
            'details' => 'Aliquam eius tempora consequatur ea cumque. Cumque labore tenetur.',
            'issued_at' => '2025-02-14',
            'expires_at' => '2025-05-31'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'MIR-75538', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[51]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 05:35:22',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[56]->id,
            'details' => 'Ut quaerat et explicabo dolor corporis. Molestias sequi quia mollitia. Ab perspiciatis natus sunt.',
            'issued_at' => '2025-01-04',
            'expires_at' => '2025-02-26'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'blk-94733', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[56]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 02:56:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[110]->id,
            'details' => 'Iusto hic laborum explicabo. Optio provident numquam minus officia doloribus temporibus.',
            'issued_at' => '2025-02-08',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Uhm-71776', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[110]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 07:43:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[70]->id,
            'details' => 'Ad quidem voluptas perspiciatis asperiores voluptatum. Eos alias veritatis sed nulla.',
            'issued_at' => '2025-01-21',
            'expires_at' => '2025-04-17'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BdR-94175', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[70]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 13:26:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[54]->id,
            'details' => 'Consequuntur dignissimos voluptatibus dolorum amet.',
            'issued_at' => '2025-01-25',
            'expires_at' => '2025-03-04'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KjO-67196', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[54]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 13:16:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[91]->id,
            'details' => 'Animi optio rem atque. Animi commodi a cum autem fugit.',
            'issued_at' => '2025-02-03',
            'expires_at' => '2025-03-26'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'fLc-80048', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[91]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 12:41:30',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[152]->id,
            'details' => 'Aperiam maxime harum delectus id quam. Quo odit vel laborum magni amet.',
            'issued_at' => '2025-04-19',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qGi-40964', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[152]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 12:00:32',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[163]->id,
            'details' => 'Eveniet nam ex magni molestias vero laborum. Harum dolorum voluptatem nobis.',
            'issued_at' => '2025-04-20',
            'expires_at' => '2025-05-03'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'kqU-08923', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[163]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 15:19:24',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[34]->id,
            'details' => 'Voluptatibus laboriosam iusto nobis autem.',
            'issued_at' => '2025-01-28',
            'expires_at' => '2025-02-19'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qIL-62622', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[34]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 06:59:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[140]->id,
            'details' => 'Quibusdam nobis officia eum ex aperiam. Accusantium expedita illo tenetur delectus nemo eius.',
            'issued_at' => '2025-01-13',
            'expires_at' => '2025-02-09'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OBH-47613', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[140]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 04:41:07',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[185]->id,
            'details' => 'Quibusdam minima commodi asperiores vel.',
            'issued_at' => '2025-02-12',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Zmx-31075', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[185]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 11:51:19',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[118]->id,
            'details' => 'Nobis ut eius esse occaecati. Magni corrupti adipisci aperiam. Iure ut commodi unde.',
            'issued_at' => '2025-02-24',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'GiH-62360', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[118]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 15:59:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[170]->id,
            'details' => 'Ea molestiae amet.',
            'issued_at' => '2025-04-27',
            'expires_at' => '2025-05-07'
        ]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'PFS-18110', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[170]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 16:17:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[117]->id,
            'details' => 'Fugit cum possimus velit a quos eaque.',
            'issued_at' => '2025-04-08',
            'expires_at' => '2025-04-15'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'RHA-64090', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[117]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 20:28:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[15]->id,
            'patient_id' => $pacienti[52]->id,
            'details' => 'Reiciendis voluptatum saepe suscipit. Necessitatibus necessitatibus cumque.',
            'issued_at' => '2025-04-20',
            'expires_at' => '2025-05-25'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'DXc-71294', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[52]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 18:13:17',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[54]->id,
            'details' => 'Nobis consectetur minima incidunt. Magnam id quam ex sequi. Blanditiis odit illum veniam ut.',
            'issued_at' => '2025-05-03',
            'expires_at' => '2025-05-05'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JSI-55439', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[54]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 22:53:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[161]->id,
            'details' => 'Inventore maiores sapiente earum similique. Ipsum debitis culpa necessitatibus quibusdam voluptate.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-05-10'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zLY-36693', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[161]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 09:36:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[132]->id,
            'details' => 'Eum occaecati itaque qui aliquam modi.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-05-12'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Crz-05679', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[132]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 09:59:37',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[45]->id,
            'patient_id' => $pacienti[150]->id,
            'details' => 'Voluptatem architecto dicta soluta sed recusandae. Explicabo pariatur perspiciatis.',
            'issued_at' => '2025-03-11',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'IEN-57876', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[150]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 09:29:50',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[198]->id,
            'details' => 'Molestias occaecati magnam quia velit. Aliquam accusantium adipisci quod. Fugiat dolores veniam.',
            'issued_at' => '2025-01-26',
            'expires_at' => '2025-03-01'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zRO-14475', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[198]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 22:23:16',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[13]->id,
            'patient_id' => $pacienti[178]->id,
            'details' => 'Repellendus aperiam vitae omnis dolorum eaque magni culpa.',
            'issued_at' => '2025-02-13',
            'expires_at' => '2025-03-08'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'aFI-65263', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[178]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 18:13:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[110]->id,
            'details' => 'Accusamus neque exercitationem dolores.',
            'issued_at' => '2025-02-07',
            'expires_at' => '2025-03-23'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'UQd-16690', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[110]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 06:13:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[16]->id,
            'details' => 'Earum placeat aliquid officia. Veritatis fuga dicta qui rerum earum. Iusto velit eos perferendis.',
            'issued_at' => '2025-02-10',
            'expires_at' => '2025-05-06'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JuF-09185', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[16]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 12:56:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[174]->id,
            'details' => 'Ducimus natus exercitationem. Labore unde voluptatem fuga laborum aliquid ex accusantium.',
            'issued_at' => '2025-03-28',
            'expires_at' => '2025-05-02'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'GGo-50732', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[174]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 17:50:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[18]->id,
            'patient_id' => $pacienti[4]->id,
            'details' => 'Occaecati veniam sed molestias. Explicabo earum ipsam debitis totam.',
            'issued_at' => '2025-04-20',
            'expires_at' => '2025-04-24'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'kFe-65723', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[4]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 02:13:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[14]->id,
            'patient_id' => $pacienti[115]->id,
            'details' => 'Ipsa repellendus enim. Eveniet quas nemo facilis sequi id. Quis non sequi ut amet nihil.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-03-30'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'JES-90536', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[115]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 01:30:32',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[0]->id,
            'details' => 'Pariatur ipsum facere explicabo. Consequuntur pariatur cupiditate fuga.',
            'issued_at' => '2025-03-24',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'UOk-54610', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[0]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 22:55:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[146]->id,
            'details' => 'Culpa aperiam odio tempore in illo. Dolore quasi voluptatibus illo eveniet.',
            'issued_at' => '2025-03-04',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'OYk-64601', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[146]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 10:09:33',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[21]->id,
            'patient_id' => $pacienti[86]->id,
            'details' => 'Natus aspernatur id necessitatibus. Praesentium tenetur assumenda natus cum vel.',
            'issued_at' => '2025-03-24',
            'expires_at' => '2025-05-16'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'GWp-03899', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[86]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 02:49:05',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[144]->id,
            'details' => 'Libero dicta blanditiis ad delectus. Vero temporibus ipsam nobis nisi.',
            'issued_at' => '2025-04-18',
            'expires_at' => '2025-05-27'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'okx-16305', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[144]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 23:36:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[28]->id,
            'patient_id' => $pacienti[150]->id,
            'details' => 'Ipsum esse dolor illum tenetur optio ullam. Culpa voluptas velit voluptatum aut.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-03-16'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'UpZ-61541', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[150]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 09:08:04',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[3]->id,
            'patient_id' => $pacienti[69]->id,
            'details' => 'Aperiam beatae provident placeat eius fuga voluptatibus.',
            'issued_at' => '2025-01-25',
            'expires_at' => '2025-03-01'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'MWE-84549', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[69]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 20:28:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[41]->id,
            'patient_id' => $pacienti[190]->id,
            'details' => 'Cupiditate reiciendis veritatis voluptatum earum. Reiciendis sequi vel qui modi libero nihil.',
            'issued_at' => '2025-04-09',
            'expires_at' => '2025-05-15'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gTj-61385', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[190]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 13:59:30',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[103]->id,
            'details' => 'Occaecati nihil blanditiis quibusdam culpa quidem sunt.',
            'issued_at' => '2025-01-02',
            'expires_at' => '2025-01-20'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'nKS-54172', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[103]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 19:35:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[20]->id,
            'details' => 'Quaerat laudantium eum sapiente laudantium. Delectus alias dicta odio.',
            'issued_at' => '2025-04-09',
            'expires_at' => '2025-05-09'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'MHH-26707', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[20]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 05:23:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[157]->id,
            'details' => 'Doloribus tempora magnam atque. Minima numquam fuga accusantium laudantium hic laboriosam.',
            'issued_at' => '2025-04-19',
            'expires_at' => '2025-05-13'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qkI-93065', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[157]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 09:33:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[124]->id,
            'details' => 'Dolorum itaque eaque fugiat laboriosam iusto illo. Beatae consequuntur possimus magni beatae.',
            'issued_at' => '2025-02-08',
            'expires_at' => '2025-05-17'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Vcm-59916', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[124]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 18:45:32',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[81]->id,
            'details' => 'Nulla quos ipsam consequatur. Cupiditate ducimus atque quod similique.',
            'issued_at' => '2025-01-06',
            'expires_at' => '2025-03-07'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qIZ-21271', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[81]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 08:07:52',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[60]->id,
            'details' => 'Asperiores tenetur in deleniti et autem vel. Nesciunt tempora iusto in ratione.',
            'issued_at' => '2025-01-28',
            'expires_at' => '2025-03-14'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SpG-09628', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[60]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 10:34:22',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[11]->id,
            'patient_id' => $pacienti[102]->id,
            'details' => 'Similique ipsum sequi et. Accusantium ab similique soluta dolor qui.',
            'issued_at' => '2025-02-27',
            'expires_at' => '2025-06-06'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Evx-30866', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[102]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 19:31:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[115]->id,
            'details' => 'Tempore dolore ea quos nam.
Nemo aperiam aliquid id odio laboriosam explicabo.',
            'issued_at' => '2025-04-12',
            'expires_at' => '2025-05-02'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rYy-02305', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[115]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 07:45:27',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[49]->id,
            'details' => 'Nostrum accusamus aperiam qui tenetur. Officiis et blanditiis fugiat.',
            'issued_at' => '2025-01-20',
            'expires_at' => '2025-01-25'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rBx-66005', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[49]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 18:16:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[74]->id,
            'details' => 'Ut magnam iusto temporibus deserunt voluptates. In vel minima distinctio facere veniam.',
            'issued_at' => '2025-02-07',
            'expires_at' => '2025-02-18'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'AXv-87229', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[74]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 22:52:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[13]->id,
            'patient_id' => $pacienti[134]->id,
            'details' => 'Veniam ea dolor. Non mollitia harum quos porro atque.',
            'issued_at' => '2025-02-08',
            'expires_at' => '2025-04-21'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Jva-21412', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[134]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 22:49:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[127]->id,
            'details' => 'Rem dicta dolore maiores vero.
Sit soluta quidem impedit illo velit.',
            'issued_at' => '2025-02-26',
            'expires_at' => '2025-03-01'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wKw-90263', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[127]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 09:09:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[174]->id,
            'details' => 'Fugit earum fugiat. Necessitatibus laboriosam consequuntur.',
            'issued_at' => '2025-02-17',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ysS-51911', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[174]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 10:49:05',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[75]->id,
            'details' => 'Fugiat natus aperiam deserunt autem in. Adipisci veritatis maxime corporis numquam repellendus qui.',
            'issued_at' => '2025-02-11',
            'expires_at' => '2025-04-08'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qUo-72227', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[75]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 14:41:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[126]->id,
            'details' => 'Alias velit fuga voluptatem. Autem minima nostrum cupiditate.',
            'issued_at' => '2025-05-06',
            'expires_at' => '2025-05-10'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'eOH-01617', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[126]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 04:26:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[175]->id,
            'details' => 'Nihil quae eaque assumenda eum. Accusantium aut laudantium maxime sint quis.',
            'issued_at' => '2025-03-07',
            'expires_at' => '2025-05-04'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hzS-90464', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[175]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 03:55:36',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[119]->id,
            'details' => 'Eaque quo eius.',
            'issued_at' => '2025-02-12',
            'expires_at' => '2025-04-14'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rLT-19661', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[119]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 22:02:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[13]->id,
            'patient_id' => $pacienti[186]->id,
            'details' => 'Similique laudantium provident consequatur rerum.',
            'issued_at' => '2025-03-12',
            'expires_at' => '2025-03-21'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'bnk-16634', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[186]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 18:34:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[8]->id,
            'details' => 'Autem similique nam corporis non incidunt sunt iure. Quis iste aliquam. Iusto recusandae ipsum.',
            'issued_at' => '2025-02-13',
            'expires_at' => '2025-03-27'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Ldq-34182', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[8]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 00:48:51',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[88]->id,
            'details' => 'Voluptas est deserunt rem a. Similique neque consequuntur quibusdam dolorum ex voluptatem.',
            'issued_at' => '2025-02-20',
            'expires_at' => '2025-04-10'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cra-76088', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[88]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 19:52:37',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[153]->id,
            'details' => 'Qui magnam reprehenderit et. Velit dolore nobis fugit non.',
            'issued_at' => '2025-03-22',
            'expires_at' => '2025-05-13'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zFk-53205', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[153]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 15:50:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[59]->id,
            'details' => 'Ex porro sint minima. Fugit a eos molestiae ducimus eaque quis aliquid.',
            'issued_at' => '2025-02-19',
            'expires_at' => '2025-03-08'
        ]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'fzO-18859', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[59]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 12:44:04',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[12]->id,
            'details' => 'Eaque quod aliquid animi porro facilis. Laborum veritatis tempore quidem quo.',
            'issued_at' => '2025-01-28',
            'expires_at' => '2025-03-11'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wDe-32588', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[12]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 22:32:00',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[135]->id,
            'details' => 'Recusandae voluptatem repellendus iusto.',
            'issued_at' => '2025-04-23',
            'expires_at' => '2025-05-23'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'dBO-59197', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[135]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 19:44:31',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[164]->id,
            'details' => 'Distinctio deleniti deserunt quasi quasi minus soluta. Possimus fugit quo aliquid aliquid iure.',
            'issued_at' => '2025-03-11',
            'expires_at' => '2025-05-14'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'oYU-83946', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[164]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:43:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[191]->id,
            'details' => 'Atque laboriosam quidem maiores in. Sint magni qui unde maxime quas dolore.',
            'issued_at' => '2025-02-21',
            'expires_at' => '2025-04-21'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yVW-65661', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[191]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 19:25:25',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[15]->id,
            'details' => 'Nisi ex iure accusantium in unde dolorem. Culpa nihil aspernatur doloremque.',
            'issued_at' => '2025-05-01',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'DSg-55314', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[15]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 22:27:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[5]->id,
            'patient_id' => $pacienti[118]->id,
            'details' => 'Porro distinctio aliquam iure officiis.',
            'issued_at' => '2025-01-23',
            'expires_at' => '2025-02-26'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Eyc-33304', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[118]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 16:46:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[180]->id,
            'details' => 'Minus neque blanditiis amet. Ex iusto asperiores at.',
            'issued_at' => '2025-01-19',
            'expires_at' => '2025-05-21'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'PaJ-84215', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[180]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 07:34:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[25]->id,
            'patient_id' => $pacienti[63]->id,
            'details' => 'Quos ullam at tenetur maiores voluptatem ipsa. Ullam sapiente pariatur soluta expedita minima.',
            'issued_at' => '2025-02-18',
            'expires_at' => '2025-02-19'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'SfL-91912', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[63]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 00:53:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[195]->id,
            'details' => 'Officiis dignissimos eos adipisci.',
            'issued_at' => '2025-03-13',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gRi-07172', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[195]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 04:14:31',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[59]->id,
            'details' => 'Fugit eaque harum eum ullam ipsum adipisci. Tenetur dignissimos natus placeat illo voluptate.',
            'issued_at' => '2025-03-30',
            'expires_at' => '2025-04-25'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'XPz-54752', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[59]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 07:37:42',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[40]->id,
            'patient_id' => $pacienti[106]->id,
            'details' => 'Ullam labore dicta. Nihil tempore qui cupiditate voluptatum adipisci.',
            'issued_at' => '2025-04-11',
            'expires_at' => '2025-05-07'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'mPh-98176', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[106]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 19:10:48',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[12]->id,
            'patient_id' => $pacienti[49]->id,
            'details' => 'Consequuntur cumque recusandae quam officia aut. Nostrum minus sit molestias.',
            'issued_at' => '2025-01-02',
            'expires_at' => '2025-05-16'
        ]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[24]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'keQ-48756', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[49]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 03:39:39',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[7]->id,
            'details' => 'Nesciunt totam consequatur corporis dolor mollitia esse. Unde tempore recusandae.',
            'issued_at' => '2025-02-04',
            'expires_at' => '2025-02-14'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Rem-03108', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[7]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 06:28:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[9]->id,
            'patient_id' => $pacienti[111]->id,
            'details' => 'Id eaque ratione incidunt nam provident tempora.',
            'issued_at' => '2025-01-25',
            'expires_at' => '2025-03-06'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'mlZ-23141', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[111]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 04:44:06',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[79]->id,
            'details' => 'Temporibus animi accusantium quia expedita ab. Consequuntur illum sint adipisci.',
            'issued_at' => '2025-04-14',
            'expires_at' => '2025-05-26'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'zsv-76600', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[79]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 17:23:22',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[31]->id,
            'patient_id' => $pacienti[187]->id,
            'details' => 'Eius perferendis neque in adipisci. A at illo.',
            'issued_at' => '2025-03-18',
            'expires_at' => '2025-03-20'
        ]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jzQ-70308', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[187]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 18:06:48',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[27]->id,
            'patient_id' => $pacienti[15]->id,
            'details' => 'Harum pariatur dolor fugiat officiis voluptatibus ex.
Animi aspernatur id aut doloribus.',
            'issued_at' => '2025-01-11',
            'expires_at' => '2025-04-09'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'kmk-70052', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[15]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 10:35:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[45]->id,
            'patient_id' => $pacienti[131]->id,
            'details' => 'Omnis facere commodi dolorem illo animi. Atque velit dignissimos alias repudiandae maiores.',
            'issued_at' => '2025-01-28',
            'expires_at' => '2025-03-25'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cpy-39742', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[131]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 12:38:52',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[57]->id,
            'details' => 'Tempora illo voluptate libero modi.
Alias maiores tenetur dicta. Officiis iste voluptates.',
            'issued_at' => '2025-02-03',
            'expires_at' => '2025-03-30'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'VIG-75418', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[57]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 15:55:37',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[99]->id,
            'details' => 'Laudantium quos nam veritatis officiis. Animi itaque culpa tempore. Eius ipsa dicta.',
            'issued_at' => '2025-01-26',
            'expires_at' => '2025-03-16'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'seC-62630', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[99]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 09:08:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[150]->id,
            'details' => 'Atque maxime minima et. In enim quis sit nesciunt totam.',
            'issued_at' => '2025-02-25',
            'expires_at' => '2025-03-23'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wbe-86095', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[150]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 11:31:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[107]->id,
            'details' => 'Necessitatibus ut eligendi maiores. Magni illo molestiae natus dignissimos aut.',
            'issued_at' => '2025-02-06',
            'expires_at' => '2025-05-31'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Wqo-23969', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[107]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 22:13:07',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[33]->id,
            'patient_id' => $pacienti[9]->id,
            'details' => 'Vitae expedita sed voluptatem iure quod praesentium. Nihil esse dolore aut porro.',
            'issued_at' => '2025-04-25',
            'expires_at' => '2025-06-06'
        ]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FVm-15785', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[9]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 15:48:03',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[0]->id,
            'patient_id' => $pacienti[43]->id,
            'details' => 'Cupiditate doloremque voluptates quos nihil. Error ullam natus rem vel nesciunt.',
            'issued_at' => '2025-04-26',
            'expires_at' => '2025-06-07'
        ]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Oys-02483', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[43]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 12:20:13',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[183]->id,
            'details' => 'Inventore eum earum ea accusamus quo. Reiciendis dignissimos excepturi.',
            'issued_at' => '2025-03-15',
            'expires_at' => '2025-06-09'
        ]);
        $prescriptie->medications()->attach($medicamente[6]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wHZ-04299', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[183]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-11 19:46:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[34]->id,
            'patient_id' => $pacienti[98]->id,
            'details' => 'Consectetur ipsum non error perferendis mollitia vel. Molestiae pariatur deserunt quae laudantium.',
            'issued_at' => '2025-02-20',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'tvA-32442', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[98]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 01:18:07',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[8]->id,
            'patient_id' => $pacienti[64]->id,
            'details' => 'Tenetur saepe consequatur. Rem unde ut.',
            'issued_at' => '2025-01-22',
            'expires_at' => '2025-04-30'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yHH-56619', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[64]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 06:58:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[47]->id,
            'details' => 'Laborum quia similique explicabo ex earum perferendis. Non excepturi impedit cumque tempora nam.',
            'issued_at' => '2025-04-06',
            'expires_at' => '2025-05-18'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Upv-45522', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[47]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 14:48:36',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[67]->id,
            'details' => 'In quia vero ratione nihil excepturi aut asperiores. Esse corporis illum sapiente.',
            'issued_at' => '2025-03-01',
            'expires_at' => '2025-05-08'
        ]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ZZs-48471', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[67]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 23:52:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[42]->id,
            'patient_id' => $pacienti[8]->id,
            'details' => 'Similique error sequi sint architecto perferendis illum. Maxime repellendus vitae eius nulla iste.',
            'issued_at' => '2025-04-16',
            'expires_at' => '2025-05-28'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[7]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'APH-37770', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[8]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 21:53:59',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[32]->id,
            'details' => 'Provident rem ea consequuntur ipsum voluptatum. Assumenda occaecati soluta.',
            'issued_at' => '2025-04-15',
            'expires_at' => '2025-05-25'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'ooQ-13037', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[32]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 20:48:32',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[49]->id,
            'patient_id' => $pacienti[155]->id,
            'details' => 'Tenetur hic doloremque. Adipisci numquam ipsa voluptatum.',
            'issued_at' => '2025-05-03',
            'expires_at' => '2025-05-26'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rux-13152', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[155]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 20:21:56',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[32]->id,
            'patient_id' => $pacienti[64]->id,
            'details' => 'Nisi explicabo explicabo esse. Asperiores labore non.',
            'issued_at' => '2025-01-26',
            'expires_at' => '2025-04-15'
        ]);
        $prescriptie->medications()->attach($medicamente[5]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wbJ-45296', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[64]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 06:12:04',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[26]->id,
            'details' => 'Rem expedita nam nesciunt quibusdam commodi. Odit aliquid illum eaque quisquam laboriosam.',
            'issued_at' => '2025-05-10',
            'expires_at' => '2025-06-04'
        ]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'bby-46385', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[26]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 15:24:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[49]->id,
            'patient_id' => $pacienti[195]->id,
            'details' => 'Soluta non voluptatum delectus veritatis officia. Unde laudantium ut labore earum laudantium.',
            'issued_at' => '2025-05-08',
            'expires_at' => '2025-05-12'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'IaR-74744', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[195]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 15:19:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[44]->id,
            'patient_id' => $pacienti[9]->id,
            'details' => 'Ex dicta voluptate harum consequuntur iure nulla. Quisquam fugiat ea fugiat quaerat.',
            'issued_at' => '2025-04-05',
            'expires_at' => '2025-06-07'
        ]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'gAf-41663', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[9]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 17:48:46',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[20]->id,
            'patient_id' => $pacienti[178]->id,
            'details' => 'Nihil quam non. Cumque dicta amet consectetur. Architecto minima tempora praesentium veniam.',
            'issued_at' => '2025-05-07',
            'expires_at' => '2025-05-28'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'HLU-06575', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[178]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 00:20:44',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[130]->id,
            'details' => 'Illo beatae laudantium. Soluta alias nam impedit magni fuga.',
            'issued_at' => '2025-04-16',
            'expires_at' => '2025-05-29'
        ]);
        $prescriptie->medications()->attach($medicamente[13]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'XIz-37967', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[130]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 06:59:07',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[197]->id,
            'details' => 'Corrupti quam corrupti. Sequi libero magni commodi harum. Ex sint dignissimos.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-06-02'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hXV-51266', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[197]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 04:45:21',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[98]->id,
            'details' => 'Vel id aliquam perspiciatis. Officiis illo eveniet rem praesentium. Sunt fugit sed commodi et quis.',
            'issued_at' => '2025-03-12',
            'expires_at' => '2025-03-24'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'hwy-20518', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[98]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 09:50:26',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[35]->id,
            'patient_id' => $pacienti[90]->id,
            'details' => 'Sunt doloribus natus. Nesciunt impedit iure ullam.',
            'issued_at' => '2025-04-24',
            'expires_at' => '2025-05-07'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FTe-07491', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[90]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 09:52:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[11]->id,
            'patient_id' => $pacienti[160]->id,
            'details' => 'Pariatur ea nemo voluptatibus fugit. Voluptates recusandae ducimus odio.',
            'issued_at' => '2025-03-15',
            'expires_at' => '2025-03-20'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'FPC-27039', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[160]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 13:56:00',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[48]->id,
            'details' => 'Quo libero aperiam velit possimus quae. Nisi non aspernatur eum.',
            'issued_at' => '2025-01-22',
            'expires_at' => '2025-03-16'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[14]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'rgD-43096', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[48]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 20:00:29',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[163]->id,
            'details' => 'Occaecati accusantium facere ut quis odit. In eveniet eligendi consectetur vitae natus.',
            'issued_at' => '2025-02-10',
            'expires_at' => '2025-03-05'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cLE-68854', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[163]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 08:57:54',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[36]->id,
            'details' => 'Beatae fuga aliquam voluptatibus explicabo. Dolorum magnam dolor voluptatibus.',
            'issued_at' => '2025-04-23',
            'expires_at' => '2025-05-01'
        ]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[19]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'KKL-94565', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[36]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 11:24:18',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[47]->id,
            'patient_id' => $pacienti[160]->id,
            'details' => 'Excepturi sint sequi ex laudantium et molestiae. Eum blanditiis natus praesentium voluptate dolor.',
            'issued_at' => '2025-01-08',
            'expires_at' => '2025-05-07'
        ]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'glF-79725', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[160]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:35:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[29]->id,
            'patient_id' => $pacienti[7]->id,
            'details' => 'Ex quam tempore earum iusto nostrum eius.',
            'issued_at' => '2025-01-01',
            'expires_at' => '2025-01-13'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[25]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'yCK-64179', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[7]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 20:59:34',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[18]->id,
            'patient_id' => $pacienti[70]->id,
            'details' => 'Delectus explicabo excepturi amet neque hic consequatur optio. Corrupti vel maxime quam.',
            'issued_at' => '2025-03-07',
            'expires_at' => '2025-05-24'
        ]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'GrE-95956', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[70]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 07:11:55',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[30]->id,
            'patient_id' => $pacienti[163]->id,
            'details' => 'Dolor voluptas eaque ea voluptas velit dolores.',
            'issued_at' => '2025-03-05',
            'expires_at' => '2025-03-05'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'jId-86043', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[163]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-18 13:05:49',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[34]->id,
            'patient_id' => $pacienti[85]->id,
            'details' => 'Dicta repellendus possimus quae fugit. Fugit laboriosam suscipit suscipit earum.',
            'issued_at' => '2025-02-13',
            'expires_at' => '2025-04-05'
        ]);
        $prescriptie->medications()->attach($medicamente[18]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'NKl-98530', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[85]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 04:17:08',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[177]->id,
            'details' => 'Quisquam molestias ad eum vero vero mollitia. Tempora esse repellat vero perferendis adipisci.',
            'issued_at' => '2025-03-28',
            'expires_at' => '2025-04-23'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[15]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[21]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'aLr-08970', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[177]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 03:14:38',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[16]->id,
            'patient_id' => $pacienti[52]->id,
            'details' => 'Suscipit atque necessitatibus reiciendis illo modi doloremque. Aut ut illo inventore quibusdam.',
            'issued_at' => '2025-04-30',
            'expires_at' => '2025-04-30'
        ]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'wTU-23718', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[52]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 04:13:35',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[26]->id,
            'patient_id' => $pacienti[198]->id,
            'details' => 'Molestias labore vel nisi alias laborum. Ducimus repudiandae neque doloremque ipsum hic eligendi.',
            'issued_at' => '2025-02-09',
            'expires_at' => '2025-06-07'
        ]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[27]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LQU-07885', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[198]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 02:56:19',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[24]->id,
            'patient_id' => $pacienti[67]->id,
            'details' => 'Illo recusandae fugiat reprehenderit.
Nam reprehenderit nobis architecto dolores praesentium.',
            'issued_at' => '2025-02-20',
            'expires_at' => '2025-04-23'
        ]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'lSX-90187', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[67]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 10:19:23',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[10]->id,
            'patient_id' => $pacienti[187]->id,
            'details' => 'Quidem earum at ipsa ut. Veritatis numquam dignissimos expedita. Aliquid fugiat omnis omnis dolor.',
            'issued_at' => '2025-03-10',
            'expires_at' => '2025-05-06'
        ]);
        $prescriptie->medications()->attach($medicamente[9]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[2]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'qwz-89713', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[187]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 22:54:57',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[191]->id,
            'details' => 'Minima asperiores sed ex. Dolores voluptate suscipit assumenda. Ipsam dolore totam quae modi quo.',
            'issued_at' => '2025-01-19',
            'expires_at' => '2025-04-21'
        ]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'miT-72469', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[191]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 19:06:50',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[1]->id,
            'patient_id' => $pacienti[156]->id,
            'details' => 'Est error mollitia aliquid cum explicabo qui consequuntur. Quidem id sunt saepe accusamus.',
            'issued_at' => '2025-04-15',
            'expires_at' => '2025-06-06'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'YSc-01962', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[156]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 02:48:06',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[37]->id,
            'patient_id' => $pacienti[56]->id,
            'details' => 'Numquam quisquam porro eaque. Ex aliquam vero nostrum libero.',
            'issued_at' => '2025-03-18',
            'expires_at' => '2025-04-13'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[26]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[10]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'cRK-76728', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[56]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-13 13:52:20',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[21]->id,
            'patient_id' => $pacienti[136]->id,
            'details' => 'Maxime commodi dolorum omnis pariatur. Animi quasi cumque quisquam nesciunt ab facilis.',
            'issued_at' => '2025-01-20',
            'expires_at' => '2025-05-15'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[22]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'WWQ-86745', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[136]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 18:35:46',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[39]->id,
            'patient_id' => $pacienti[45]->id,
            'details' => 'Itaque minus magnam nemo. Nemo pariatur nulla eaque id quisquam.',
            'issued_at' => '2025-02-22',
            'expires_at' => '2025-04-01'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 2, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[23]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'BAY-40810', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[45]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-15 02:42:10',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[6]->id,
            'patient_id' => $pacienti[114]->id,
            'details' => 'Illum quos quibusdam enim. Minus suscipit repellat sed soluta. Quibusdam at voluptas ab aut.',
            'issued_at' => '2025-02-16',
            'expires_at' => '2025-03-28'
        ]);
        $prescriptie->medications()->attach($medicamente[12]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'iot-23718', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[114]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 21:22:46',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[19]->id,
            'patient_id' => $pacienti[165]->id,
            'details' => 'Asperiores asperiores aliquam ut. Iste incidunt facere impedit pariatur facere dolores.',
            'issued_at' => '2025-05-06',
            'expires_at' => '2025-05-27'
        ]);
        $prescriptie->medications()->attach($medicamente[20]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[11]->id, ['frecventa' => 3, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'aBQ-05047', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[165]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 10:27:09',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[43]->id,
            'patient_id' => $pacienti[96]->id,
            'details' => 'Ea voluptatum illum nihil corporis. Repudiandae enim reiciendis ipsa.',
            'issued_at' => '2025-03-25',
            'expires_at' => '2025-03-28'
        ]);
        $prescriptie->medications()->attach($medicamente[3]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 1, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Lqa-38251', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[96]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 20:23:48',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[36]->id,
            'patient_id' => $pacienti[147]->id,
            'details' => 'Ab odit voluptate ipsum fugit quibusdam laborum. Nostrum culpa sint ad ut.',
            'issued_at' => '2025-04-26',
            'expires_at' => '2025-06-01'
        ]);
        $prescriptie->medications()->attach($medicamente[8]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[4]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'iOu-23994', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[147]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-17 16:27:14',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[7]->id,
            'patient_id' => $pacienti[82]->id,
            'details' => 'Accusamus at necessitatibus expedita. Fuga illo provident accusantium.',
            'issued_at' => '2025-04-15',
            'expires_at' => '2025-04-19'
        ]);
        $prescriptie->medications()->attach($medicamente[29]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 1, 'interval_ore' => 12]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'Ztq-51581', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[82]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 19:57:43',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[17]->id,
            'patient_id' => $pacienti[102]->id,
            'details' => 'Velit totam vel. Hic dicta quasi minima a reprehenderit labore.',
            'issued_at' => '2025-01-23',
            'expires_at' => '2025-04-15'
        ]);
        $prescriptie->medications()->attach($medicamente[17]->id, ['frecventa' => 1, 'interval_ore' => 8]);
        $prescriptie->medications()->attach($medicamente[1]->id, ['frecventa' => 3, 'interval_ore' => 12]);
        $prescriptie->medications()->attach($medicamente[16]->id, ['frecventa' => 2, 'interval_ore' => 8]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'tci-29606', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[102]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-12 11:35:45',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[23]->id,
            'patient_id' => $pacienti[173]->id,
            'details' => 'Ab sed corrupti laboriosam reiciendis. Dicta praesentium et consequatur delectus esse ad autem.',
            'issued_at' => '2025-01-18',
            'expires_at' => '2025-05-23'
        ]);
        $prescriptie->medications()->attach($medicamente[28]->id, ['frecventa' => 3, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'PFB-71839', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[173]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-14 22:26:38',
            'status' => 'programat'
        ]);
        $prescriptie = Prescription::create([
            'medic_id' => $medici[2]->id,
            'patient_id' => $pacienti[116]->id,
            'details' => 'Tempore laboriosam quas accusamus molestias. Natus neque quo expedita minus.',
            'issued_at' => '2025-04-10',
            'expires_at' => '2025-06-08'
        ]);
        $prescriptie->medications()->attach($medicamente[0]->id, ['frecventa' => 2, 'interval_ore' => 6]);
        QRCode::create(['reteta_id' => $prescriptie->id, 'cod' => 'LfC-92175', 'valid' => true]);
        Notification::create([
            'user_id' => $pacienti[116]->id,
            'reteta_id' => $prescriptie->id,
            'timestamp' => '2025-05-16 12:06:34',
            'status' => 'programat'
        ]);
    }
}
