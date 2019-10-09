Search.setIndex({docnames:["data","index","nbutils","nn","ptradio"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["data.rst","index.rst","nbutils.rst","nn.rst","ptradio.rst"],objects:{"rfml.data":{dataset:[0,0,0,"-"],dataset_builder:[0,0,0,"-"],encoder:[0,0,0,"-"],factory:[0,0,0,"-"]},"rfml.data.converters":{rml_2016:[0,0,0,"-"]},"rfml.data.converters.rml_2016":{load_RML201610A_dataset:[0,1,1,""],load_RML201610B_dataset:[0,1,1,""]},"rfml.data.dataset":{Dataset:[0,2,1,""]},"rfml.data.dataset.Dataset":{as_numpy:[0,3,1,""],as_torch:[0,3,1,""],columns:[0,3,1,""],df:[0,3,1,""],get_examples_per_class:[0,3,1,""],is_balanced:[0,3,1,""],split:[0,3,1,""]},"rfml.data.dataset_builder":{DatasetBuilder:[0,2,1,""]},"rfml.data.dataset_builder.DatasetBuilder":{add:[0,3,1,""],build:[0,3,1,""]},"rfml.data.encoder":{Encoder:[0,2,1,""]},"rfml.data.encoder.Encoder":{decode:[0,3,1,""],encode:[0,3,1,""],label_name:[0,3,1,""],labels:[0,3,1,""]},"rfml.data.factory":{build_dataset:[0,1,1,""]},"rfml.nbutils":{data:[2,0,0,"-"],plot:[2,0,0,"-"]},"rfml.nbutils.plot":{plot_IQ:[2,1,1,""],plot_acc_vs_snr:[2,1,1,""],plot_acc_vs_spr:[2,1,1,""],plot_confusion:[2,1,1,""],plot_convergence:[2,1,1,""]},"rfml.nn.F":{energy:[3,0,0,"-"],evm:[3,0,0,"-"],psd:[3,0,0,"-"]},"rfml.nn.F.energy":{energy:[3,1,1,""]},"rfml.nn.F.evm":{evm:[3,1,1,""]},"rfml.nn.eval":{accuracy:[3,0,0,"-"],confusion:[3,0,0,"-"]},"rfml.nn.eval.accuracy":{compute_accuracy:[3,1,1,""],compute_accuracy_on_cross_sections:[3,1,1,""],compute_topk_accuracy:[3,1,1,""]},"rfml.nn.eval.confusion":{compute_confusion:[3,1,1,""]},"rfml.nn.layers":{flatten:[3,0,0,"-"],power_normalization:[3,0,0,"-"]},"rfml.nn.layers.flatten":{Flatten:[3,2,1,""]},"rfml.nn.layers.flatten.Flatten":{forward:[3,3,1,""]},"rfml.nn.layers.power_normalization":{PowerNormalization:[3,2,1,""]},"rfml.nn.layers.power_normalization.PowerNormalization":{forward:[3,3,1,""]},"rfml.nn.model":{base:[3,0,0,"-"],cldnn:[3,0,0,"-"],cnn:[3,0,0,"-"],factory:[3,0,0,"-"]},"rfml.nn.model.base":{Model:[3,2,1,""]},"rfml.nn.model.base.Model":{device:[3,3,1,""],freeze:[3,3,1,""],input_samples:[3,3,1,""],load:[3,3,1,""],n_classes:[3,3,1,""],n_parameters:[3,3,1,""],n_trainable_parameters:[3,3,1,""],outputs:[3,3,1,""],predict:[3,3,1,""],save:[3,3,1,""],unfreeze:[3,3,1,""]},"rfml.nn.model.cldnn":{CLDNN:[3,2,1,""]},"rfml.nn.model.cldnn.CLDNN":{forward:[3,3,1,""]},"rfml.nn.model.cnn":{CNN:[3,2,1,""]},"rfml.nn.model.cnn.CNN":{forward:[3,3,1,""]},"rfml.nn.model.factory":{build_model:[3,1,1,""]},"rfml.nn.train":{base:[3,0,0,"-"],factory:[3,0,0,"-"],printing_training_listener:[3,0,0,"-"],standard:[3,0,0,"-"],training_listener:[3,0,0,"-"]},"rfml.nn.train.factory":{build_trainer:[3,1,1,""]},"rfml.nn.train.printing_training_listener":{PrintingTrainingListener:[3,2,1,""]},"rfml.nn.train.printing_training_listener.PrintingTrainingListener":{on_epoch_completed:[3,3,1,""],on_training_completed:[3,3,1,""],on_validation_completed:[3,3,1,""]},"rfml.nn.train.standard":{StandardTrainingStrategy:[3,2,1,""]},"rfml.nn.train.training_listener":{TrainingListener:[3,2,1,""]},"rfml.nn.train.training_listener.TrainingListener":{on_epoch_completed:[3,3,1,""],on_training_completed:[3,3,1,""],on_validation_completed:[3,3,1,""]},"rfml.ptradio":{awgn:[4,0,0,"-"],cfo:[4,0,0,"-"],constellation:[4,0,0,"-"],downsample:[4,0,0,"-"],modem:[4,0,0,"-"],rrc:[4,0,0,"-"],slicer:[4,0,0,"-"],upsample:[4,0,0,"-"]},"rfml.ptradio.awgn":{AWGN:[4,2,1,""]},"rfml.ptradio.awgn.AWGN":{forward:[4,3,1,""],set_snr:[4,3,1,""]},"rfml.ptradio.cfo":{CFO:[4,2,1,""]},"rfml.ptradio.cfo.CFO":{forward:[4,3,1,""],set_cfo:[4,3,1,""]},"rfml.ptradio.constellation":{ConstellationMapper:[4,2,1,""],ConstellationUnmapper:[4,2,1,""]},"rfml.ptradio.constellation.ConstellationMapper":{forward:[4,3,1,""],get_M:[4,3,1,""],get_bps:[4,3,1,""]},"rfml.ptradio.constellation.ConstellationUnmapper":{forward:[4,3,1,""],get_M:[4,3,1,""],get_bps:[4,3,1,""]},"rfml.ptradio.downsample":{Downsample:[4,2,1,""]},"rfml.ptradio.downsample.Downsample":{forward:[4,3,1,""]},"rfml.ptradio.modem":{Receiver:[4,2,1,""],Transmitter:[4,2,1,""],theoreticalBER:[4,1,1,""]},"rfml.ptradio.modem.Receiver":{demodulate:[4,3,1,""]},"rfml.ptradio.modem.Transmitter":{modulate:[4,3,1,""]},"rfml.ptradio.rrc":{RRC:[4,2,1,""]},"rfml.ptradio.rrc.RRC":{forward:[4,3,1,""]},"rfml.ptradio.slicer":{Slicer:[4,2,1,""]},"rfml.ptradio.slicer.Slicer":{forward:[4,3,1,""]},"rfml.ptradio.upsample":{Upsample:[4,2,1,""]},"rfml.ptradio.upsample.Upsample":{forward:[4,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"10a":0,"10b":0,"10e":3,"10x":0,"1x1x2xn":4,"1x1x2xn_symbol":4,"2xm":4,"2xn":[0,2],"8psk":4,"case":[0,3],"class":[0,3,4],"default":[0,2,3,4],"float":[0,2,3,4],"function":[0,1,2,4],"int":[0,3,4],"long":[3,4],"new":0,"return":[0,2,3,4],"short":3,"switch":3,"throw":3,"transient":4,"true":[0,2,3,4],"try":3,"while":[0,3,4],E_s:4,For:0,Not:0,One:4,The:[0,3,4],Then:3,These:3,about:[0,3,4],abov:[2,4],acc_vs_snr:2,acc_vs_spr:2,access:3,accuraci:[1,2],achiev:[2,3],across:3,actual:4,add:0,add_pad:4,added:[0,2,3,4],addit:[0,1],addition:0,after:[3,4],afterward:[3,4],against:3,algorithm:4,align:4,all:[0,3,4],allow:[0,3,4],along:3,alpha:4,alreadi:0,also:3,although:[3,4],alwai:[0,4],amongst:0,analysi:3,analyz:4,ani:[2,4],annoi:0,annot:2,anoth:[0,3],anyth:0,anywai:4,appli:[0,3],applic:[3,4],arbritrari:3,architectur:3,aren:[0,3],argmax:3,argument:[3,4],around:0,arrai:[0,2,4],as_numpi:0,as_torch:0,assum:[3,4],assumpt:[0,4],attempt:0,attribut:0,author:3,avail:0,averag:[2,3,4],awai:4,awgn:4,axi:3,back:[3,4],backward:3,balanc:0,base:[0,1],baseband:4,basic:4,batch:[0,3,4],batch_siz:3,becaus:4,been:[0,3,4],befor:[0,3],begin:4,behav:3,behavior:0,being:[0,3,4],below:0,ber:4,berawgn:4,best:[2,3],best_epoch:3,best_loss:3,between:[0,3,4],bia:3,bit:4,block:3,blue:2,bool:[0,2,3,4],both:[0,4],bpsk:[0,4],bryse:3,bspk:4,build:[0,3],build_dataset:0,build_model:3,build_train:3,builder:1,built:[0,3],bxc:3,bxcx1xn:3,bxcxiqxn:[3,4],bxcxiqxt:[3,4],cach:0,calcul:[3,4],call:[0,3,4],callback:3,caller:3,can:[0,3,4],care:[3,4],carrier:4,categor:[0,3],caus:3,center:1,cfo:[3,4],chain:[0,4],chang:[3,4],channel:[0,3,4],check:0,child:3,chosen:4,chunk:4,citat:0,clanci:3,classif:[0,2,3,4],classifi:3,cldnn:1,close:3,cmap:2,cnn:1,code:[2,4],collaps:3,collect:0,color:2,colormap:2,column:[0,3],command:3,common:[0,3],commun:3,compil:0,complet:3,complex:[2,3,4],comput:[3,4],compute_accuraci:3,compute_accuracy_on_cross_sect:3,compute_confus:3,compute_topk_accuraci:3,concaten:[3,4],condit:3,confer:[0,3],config:3,configur:3,confus:[1,2],consist:0,constel:1,constellationmapp:4,constellationunmapp:4,construct:[0,3,4],constructor:3,contain:[0,4],content:1,continu:[3,4],control:0,conveni:3,converg:2,convers:4,convert:1,convolut:[3,4],core:[0,3],corgan:3,correct:0,correspond:[0,3],cos:4,cosin:1,costli:0,could:[0,3,4],count:0,cpu:3,creat:[0,2,3,4],creation:[0,3],creativ:0,creativecommon:0,cross:3,cuda:3,cuda_visible_devic:3,current:[0,3,4],custom:3,data:[1,3,4],datafram:[0,3],dataset:[1,3],dataset_build:0,dataset_nam:0,datasetbuild:0,decid:3,decim:4,decod:0,deep:3,deepsig:0,defin:[0,3,4],delai:4,delet:3,demodul:4,densiti:1,depend:0,describ:[2,3,4],desir:[0,3,4],detail:3,detect:3,determin:3,devic:3,dict:0,did:[0,3],differ:[0,4],differenti:4,dim:3,dimens:[2,3,4],directli:[0,3,4],discret:4,disk:3,distinguish:0,divis:0,document:3,doe:[0,3,4],doesn:[2,3],don:[2,3,4],download:0,downsampl:1,draw:2,dropout:3,dsp:3,due:[3,4],dure:[0,2,3,4],dynam:3,dyspan:3,e_b:4,each:[0,2,3,4],earli:[0,3],easi:0,easier:0,easili:4,effect:[3,4],either:[0,4],els:3,embed:0,enabl:3,encapsul:3,encod:[1,3],encount:0,end:[3,4],energi:[1,4],engin:3,enough:3,ensur:[0,3],entir:0,entri:0,epoch:[2,3],equal:0,equat:3,error:[1,4],essenti:3,etc:[0,3,4],euler:4,eval:3,evalu:[1,2],even:3,evenli:0,everi:[3,4],evm:3,exampl:[0,3,4],exist:[0,3],expect:[0,3,4],explicitli:0,extend:4,extens:0,extra:4,extract:0,f_0:4,f_o:4,facilit:0,factor:[0,4],factori:1,fail:0,failur:3,fals:[0,2,3,4],featur:3,fetch:0,fewer:3,figsiz:2,figur:2,file:[0,3],filter:[1,3],filter_span:4,find:3,first:[0,3],fit:4,fix:4,flag:3,flatten:1,flow:2,flower:3,follow:3,form:3,format:[0,4],former:[3,4],forward:[3,4],four:3,frac:[0,3,4],fraction:[0,4],frame:[0,4],framework:0,freez:3,frequenc:[0,1],from:[0,3,4],full:[3,4],further:[3,4],fuzzi:0,gate:3,gaussian:1,gener:[0,2,3,4],get:[0,4],get_bp:4,get_examples_per_class:0,get_m:4,give:3,given:[3,4],gnu:0,gpu:3,gradient:3,gru:3,guarante:3,half:4,has:[0,3,4],hauser:3,have:[0,2,3,4],header:0,headlei:3,heatmap:2,helper:[0,2,3],hidden:3,high:3,highest:3,hook:[3,4],horizont:2,hot:0,how:0,http:0,human:[0,2,3],ident:[3,4],ieee:3,ignor:[3,4],imag:3,imaginari:4,imbal:0,immort:3,implement:[0,3,4],improv:3,inc:0,includ:[0,3,4],inclus:0,incorrect:0,index:[0,1,4],induc:3,infer:[0,3],inherit:3,input:[3,4],input_sampl:3,insert:4,insid:[0,3],instanc:[0,3,4],instanti:3,instead:[3,4],integ:4,integr:4,intend:3,interfac:3,intermedi:3,intern:3,internet:0,interpol:4,interpret:3,interv:4,introduc:3,is_balanc:0,iter:[0,2],its:[0,3,4],jupyt:2,just:[0,3,4],kei:0,kera:[0,3],keyword:3,know:3,knowledg:3,kwarg:[0,3],label:[0,2,3],label_nam:0,larg:4,larger:3,later:[3,4],latter:[3,4],layer:[1,4],lead:0,learn:[0,3],least:4,leav:4,left:4,legalcod:0,length:[0,2,3,4],less:4,licens:0,like:[0,3],line:2,linear:[1,3],linearsegmentedcolormap:2,list:[0,2,3,4],listen:1,literatur:4,load:[0,3],load_rml201610a_dataset:0,load_rml201610b_dataset:0,loader:0,local:0,locat:[0,3],log10:4,log2:4,log:[0,3],longer:[0,3,4],lookup:4,loop:[0,3],loss:[2,3],low:[3,4],lstm:3,machin:[0,3],made:[3,4],magnitud:1,mai:[0,3,4],make:[0,3],makes:4,mani:[0,3,4],map:[0,3,4],map_loc:3,mapper:4,margin:0,mark:2,mask:[0,3],match:[0,2,3,4],mathbb:3,matlab:4,matplotlib:2,matrix:[0,2,3],max_epoch:3,maximum:3,mean:3,mean_loss:3,meant:4,measur:3,memori:3,mention:3,metadata:0,method:[0,3],michael:3,militari:3,mimic:3,mlp:3,mode:3,model:[1,4],model_nam:3,modem:1,modif:3,modifi:3,modul:[0,1,3,4],modulaton:0,more:[0,3,4],most:[3,4],multi:3,multipl:3,multipli:3,must:[0,3],n_0:4,n_class:3,n_paramet:3,n_symbol:4,n_trainable_paramet:3,name:[0,3,4],natur:4,nbutil:2,ndarrai:[0,2,3,4],ndframe:[0,3],nearest:4,nearli:3,necessari:[0,3],necessarili:3,need:[0,3,4],neg:[0,4],neighbor:4,network:[0,1],neural:[0,1],next:4,nois:[1,2],non:0,noncommerci:0,none:[0,2,3,4],normal:[1,4],note:3,notebook:1,number:[0,2,3,4],numpi:[0,2,3,4],nxn:2,object:[0,2,3],observ:3,obtain:3,occur:[0,3],odd:3,off:[3,4],offset:[0,1],on_epoch_complet:3,on_training_complet:3,on_validation_complet:3,onc:3,one:[0,3,4],onli:[0,3,4],onto:[2,3],open:[0,4],oper:[0,3,4],operatornam:[3,4],opinion:[0,3],optim:3,option:[0,2,3,4],order:[0,3,4],org:0,oshea:3,other:[0,3,4],otherwis:[0,3],our:0,out:[0,3],output:[3,4],overfit:3,overrid:[3,4],overridden:[0,3,4],overriden:4,overwrit:3,own:[0,4],pack:4,packag:0,pad:[3,4],page:1,pair:[0,2],panda:[0,3],paper:3,paramet:[0,2,3,4],part:[0,3],pass:[0,3,4],passthrough:3,path:[0,3],patienc:3,patten:3,pattern:[0,3],peak:2,per:[0,3,4],percentag:[0,4],perform:[0,3,4],perturb:2,place:3,plai:0,plot:[0,1,4],plot_acc_vs_snr:2,plot_acc_vs_spr:2,plot_confus:2,plot_converg:2,plot_iq:2,plt:2,point:4,port:3,portion:[3,4],posit:4,power:[1,4],power_norm:3,powernorm:3,pre:3,precomput:4,predict:[2,3],premad:0,preserv:3,preserve_tim:3,pretrain:3,previous:0,print:1,printing_training_listen:3,printingtraininglisten:3,probabl:3,procedur:[0,3],proceed:0,process:3,product:3,programmat:0,progress:3,properti:[0,3],prototyp:3,provid:[0,3,4],psd:3,ptradio:4,pull:3,puls:4,push:3,put:[0,2,3],pytorch:[0,3],qam16:[0,4],qam64:4,qpsk:[0,4],quick:[3,4],quit:0,radio:[0,1,3],radioml2016:0,rais:[0,1,2],random:[0,4],randomli:4,rate:[3,4],ratio:[2,4],raw:3,reach:3,read:0,readabl:[0,2,3],readi:0,real:[3,4],realiz:4,receiv:[3,4],recip:[3,4],recognit:3,recurr:3,reduc:3,refer:3,regist:[3,4],relat:4,reli:0,reload:3,remain:4,remaind:3,repres:[0,2,3,4],represent:0,requir:[0,3],resid:3,resourc:3,result:2,retriev:3,rfml:[0,2,3,4],rml2016:1,rml_2016:0,roll:4,root:1,rrc:1,run:[3,4],s_i:3,safeti:3,said:3,same:[2,3,4],sampl:[0,2,3,4],save:[0,2,3],scheme:4,seaborn:2,search:1,second:[0,3],section:3,see:3,self:0,sens:3,separ:[0,4],sequenc:4,set:[0,3,4],set_cfo:4,set_snr:4,shape:[0,2,4],sharealik:0,shea:[0,3],shorter:4,should:[0,3,4],shown:4,side:4,signal:[1,2,3],silenc:3,silent:[3,4],similar:0,simpl:[0,4],simpli:[3,4],simplif:3,simplifi:2,simplist:[0,3,4],simul:4,sin:4,sinc:[0,3,4],sine:4,singl:3,size:[2,3,4],skip:4,sklearn:0,slice:0,slicer:1,snr:[2,3,4],some:[0,3,4],sourc:[0,2,3,4],span:4,specifi:0,spectral:1,spectrum:3,split:[0,3],spr:2,springer:3,sps:[3,4],sqrt:3,squar:2,stabl:3,stack:3,stage:3,standard:1,standardtrainingstrategi:3,start:4,statu:3,stdout:3,still:3,stop:[0,3],store:3,str:[0,2,3,4],strategi:3,stream:4,string:3,structur:[3,4],subclass:[3,4],submodul:3,subsampl:0,subselect:0,subsequ:0,subset:0,sum_:3,support:[0,3,4],swap:[0,3],symbol:[1,3],symposium:3,synchron:4,system:4,take:[3,4],tap:4,tar:0,temporari:3,tensor:[3,4],tensordataset:0,term:[3,4],test:[0,3],test_pct:0,text:[2,3,4],than:4,thei:[0,3,4],them:[3,4],theoret:4,theoreticalb:4,therefor:[0,3,4],thi:[0,2,3,4],thing:3,though:4,thought:4,through:[3,4],thrown:4,thu:3,time:[0,2,3,4],titl:2,togeth:3,toi:4,too:3,top:[2,3],torch:[0,3,4],total:3,total_epoch:3,train:[0,1,2,4],train_loss:2,trainer:3,training_listen:3,traininglisten:3,trainingstrategi:3,transfer:3,transform:[0,4],translat:0,transmisison:4,transmit:4,transmitt:4,tupl:[0,2,3],turn:4,two:[0,3],type:[0,2,3,4],typic:[3,4],unchang:4,unclear:3,under:0,underli:[0,4],unders:4,understand:0,unfreez:3,union:0,uniqu:3,unit:3,unknown:[0,4],unmapp:4,unpack:4,untouch:4,unus:4,updat:[3,4],upsampl:1,use:[0,2,3,4],used:[0,2,3,4],useful:[0,3,4],useless:4,user:[3,4],using:[0,3,4],util:[0,1,3],val_loss:2,val_pct:0,valid:[0,2,3],valu:[0,2,3,4],valueerror:[0,2,4],vanish:3,variabl:[0,3],vector:[1,4],veri:4,verifi:0,via:4,vol:0,vt_cnn2:3,wai:4,want:[0,3],wave:4,wbfm:0,weight:3,well:0,were:[0,2,3],west:[0,3],what:[3,4],whatev:3,when:[3,4],where:[0,3,4],whether:3,which:[0,3,4],whichev:3,white:1,wholli:3,width:4,window:0,wireless:4,wish:4,withheld:0,within:[0,3,4],without:3,word:4,work:3,would:[0,3,4],wrap:0,wrapper:0,write:0,www:0,xjf:0,you:[0,3,4],your:4,yourself:0,z_1:4,z_2:4,zero:[0,4]},titles:["Data","Welcome to RFML with PyTorch\u2019s documentation!","Notebook Utilities","Neural Networks","PyTorch Radio"],titleterms:{"function":3,accuraci:3,addit:4,base:3,builder:0,center:4,cldnn:3,cnn:3,confus:3,constel:4,convert:0,cosin:4,data:[0,2],dataset:0,densiti:3,document:1,downsampl:4,encod:0,energi:3,error:3,evalu:3,factori:[0,3],filter:4,flatten:3,frequenc:4,gaussian:4,indic:1,layer:3,linear:4,listen:3,magnitud:3,model:3,modem:4,network:3,neural:3,nois:4,normal:3,notebook:2,offset:4,plot:2,power:3,print:3,pytorch:[1,4],radio:4,rais:4,rfml:1,rml2016:0,root:4,rrc:4,signal:4,slicer:4,spectral:3,standard:3,symbol:4,tabl:1,train:3,upsampl:4,util:2,vector:3,welcom:1,white:4}})